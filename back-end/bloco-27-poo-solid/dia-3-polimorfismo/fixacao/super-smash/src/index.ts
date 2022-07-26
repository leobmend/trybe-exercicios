import Character from "./Character";
import MeeleCharacter from "./MeeleCharacter";
import LongRangeCharacter from "./LongRangeCharacter";

const greetings = (char1: Character, char2: Character): void => {
  char1.talk();
  char2.talk();
};

greetings(new MeeleCharacter('Sven', 50), new LongRangeCharacter('Windrunner', 30));