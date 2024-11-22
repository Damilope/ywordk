"use client";

import { shuffle } from "lodash-es";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CardGroup } from "./card-group";

const kTabs = {
  shuffle: "shuffle",
  deal: "deal",
} as const;

export const Shuffler: React.FC<{}> = () => {
  const [numCards, setNumCards] = useState<number>();
  const [numPlayers, setNumPlayers] = useState<number>();
  const [shuffled, setShuffled] = useState<number[]>([]);
  const [dealt, setDealt] = useState<Array<number[]>>([]);
  const [activeTab, setActiveTab] = useState<string>(kTabs.shuffle);

  const shuffleCards = useCallback(() => {
    if (!numCards) {
      return [];
    }

    const rawCards = Array.from({ length: numCards }, (_, i) => i);
    const shuffledCards = shuffle(rawCards);
    return shuffledCards;
  }, [numCards]);

  const handleShuffle = useCallback(() => {
    setShuffled(shuffleCards());
  }, [shuffleCards]);

  const handleDealCards = useCallback(() => {
    if (!numPlayers) {
      return;
    }

    const shuffledCards = shuffleCards();
    const cardDistribution = Array.from({ length: numPlayers }, (_, i) => {
      return shuffledCards.filter((_, j) => j % numPlayers === i);
    });

    setDealt(cardDistribution);
  }, [numPlayers, shuffleCards]);

  return (
    <div className="flex flex-col space-y-8 my-6">
      <h1 className="my-0">Shuffler</h1>

      <div className="space-y-4">
        <div className="flex space-x-4">
          <div className="grid max-w-32 items-center gap-1.5">
            <Label htmlFor="cards">Cards</Label>
            <Input
              id="cards"
              type="number"
              placeholder="Cards No."
              value={numCards}
              onChange={(evt) => setNumCards(Number(evt.target.value))}
            />
          </div>

          {activeTab === kTabs.deal && (
            <div className="grid max-w-32 items-center gap-1.5">
              <Label htmlFor="players">Players</Label>
              <Input
                id="players"
                type="number"
                placeholder="Players No."
                value={numPlayers}
                onChange={(evt) => setNumPlayers(Number(evt.target.value))}
              />
            </div>
          )}
        </div>

        <div>
          {activeTab === kTabs.shuffle && (
            <Button onClick={handleShuffle} disabled={!numCards}>
              Shuffle
            </Button>
          )}
          {activeTab === kTabs.deal && (
            <Button
              onClick={handleDealCards}
              disabled={!(numCards && numPlayers)}
            >
              Deal
            </Button>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value={kTabs.shuffle}>Shuffle</TabsTrigger>
          <TabsTrigger value={kTabs.deal}>Deal</TabsTrigger>
        </TabsList>
        <TabsContent value={kTabs.shuffle}>
          <div>
            <CardGroup cards={shuffled} className="mt-8" />
          </div>
        </TabsContent>
        <TabsContent value={kTabs.deal}>
          <div className="mt-8 space-y-6">
            {dealt.map((cards, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold">Player {index + 1}</h3>
                <CardGroup cards={cards} />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
