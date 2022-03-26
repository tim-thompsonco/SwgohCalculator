import { levelingCosts } from "../constants/LevelingCost";

export const calculateNextLevelCost = (currentLevel: number): number => {
    // 85 is the current max level in SWGOH
    if (currentLevel === 85) {
        return 0;
    }

    return levelingCosts[currentLevel + 1];
}