// declare module namespace {

//     export interface Scale {
//         float: string;
//     }

//     export interface Position {
//         X: string;
//         Y: string;
//     }

//     export interface NextQuests {
//         int: any;
//     }

//     export interface WhoToGreet {
//         string: string[];
//     }

//     export interface Param {
//         anyType: any;
//     }

//     export interface DescriptionElement {
//         xmlKey: string;
//         param: Param;
//     }

//     export interface Parts {
//         DescriptionElement: DescriptionElement[];
//     }

//     export interface Scale2 {
//         float: string;
//     }

//     export interface Position2 {
//         X: string;
//         Y: string;
//     }

//     export interface DefaultPosition {
//         X: string;
//         Y: string;
//     }

//     export interface ObjectsToDrop {
//         int: string;
//     }

//     export interface AnyType {
//         -xsi:type: string;
//         #text: string;
//         name: string;
//         isEmoting: string;
//         isCharging: string;
//         willDestroyObjectsUnderfoot: string;
//         isGlowing: string;
//         coloredBorder: string;
//         flip: string;
//         drawOnTop: string;
//         faceTowardFarmer: string;
//         ignoreMovementAnimation: string;
//         faceAwayFromFarmer: string;
//         scale: Scale2;
//         timeBeforeAIMovementAgain: string;
//         glowingTransparency: string;
//         glowRate: string;
//         Position: Position2;
//         Speed: string;
//         FacingDirection: string;
//         Name: string;
//         IsEmoting: string;
//         CurrentEmote: string;
//         Scale: string;
//         daysAfterLastBirth: string;
//         birthday_Day: string;
//         age: string;
//         manners: string;
//         socialAnxiety: string;
//         optimism: string;
//         gender: string;
//         isInvisible: string;
//         datingFarmer: string;
//         divorcedFromFarmer: string;
//         datable: string;
//         id: string;
//         homeRegion: string;
//         followSchedule: string;
//         moveTowardPlayerThreshold: string;
//         DefaultFacingDirection: string;
//         DefaultPosition: DefaultPosition;
//         IsWalkingInSquare: string;
//         IsWalkingTowardPlayer: string;
//         damageToFarmer: string;
//         health: string;
//         maxHealth: string;
//         coinsToDrop: string;
//         durationOfRandomMovements: string;
//         resilience: string;
//         slipperiness: string;
//         experienceGained: string;
//         jitteriness: string;
//         missChance: string;
//         isGlider: string;
//         mineMonster: string;
//         hasSpecialItem: string;
//         objectsToDrop: ObjectsToDrop;
//     }

//     export interface Param2 {
//         anyType: AnyType[];
//     }

//     export interface Objective {
//         xmlKey: string;
//         param: Param2;
//     }

//     export interface Scale3 {
//         float: string;
//     }

//     export interface Position3 {
//         X: string;
//         Y: string;
//     }

//     export interface DefaultPosition2 {
//         X: string;
//         Y: string;
//     }

//     export interface ObjectsToDrop2 {
//         int: string;
//     }

//     export interface Monster {
//         name: string;
//         isEmoting: string;
//         isCharging: string;
//         willDestroyObjectsUnderfoot: string;
//         isGlowing: string;
//         coloredBorder: string;
//         flip: string;
//         drawOnTop: string;
//         faceTowardFarmer: string;
//         ignoreMovementAnimation: string;
//         faceAwayFromFarmer: string;
//         scale: Scale3;
//         timeBeforeAIMovementAgain: string;
//         glowingTransparency: string;
//         glowRate: string;
//         Position: Position3;
//         Speed: string;
//         FacingDirection: string;
//         Name: string;
//         IsEmoting: string;
//         CurrentEmote: string;
//         Scale: string;
//         daysAfterLastBirth: string;
//         birthday_Day: string;
//         age: string;
//         manners: string;
//         socialAnxiety: string;
//         optimism: string;
//         gender: string;
//         isInvisible: string;
//         datingFarmer: string;
//         divorcedFromFarmer: string;
//         datable: string;
//         id: string;
//         homeRegion: string;
//         followSchedule: string;
//         moveTowardPlayerThreshold: string;
//         DefaultFacingDirection: string;
//         DefaultPosition: DefaultPosition2;
//         IsWalkingInSquare: string;
//         IsWalkingTowardPlayer: string;
//         damageToFarmer: string;
//         health: string;
//         maxHealth: string;
//         coinsToDrop: string;
//         durationOfRandomMovements: string;
//         resilience: string;
//         slipperiness: string;
//         experienceGained: string;
//         jitteriness: string;
//         missChance: string;
//         isGlider: string;
//         mineMonster: string;
//         hasSpecialItem: string;
//         objectsToDrop: ObjectsToDrop2;
//     }

//     export interface DescriptionElement2 {
//         xmlKey: string;
//     }

//     export interface Dialogueparts {
//         DescriptionElement: DescriptionElement2[];
//     }

//     export interface Quest {
//         -xsi:type: string;
//         _currentObjective: string;
//         _questDescription: string;
//         _questTitle: string;
//         rewardDescription: string;
//         accepted: string;
//         completed: string;
//         dailyQuest: string;
//         showNew: string;
//         canBeCancelled: string;
//         destroy: string;
//         id: string;
//         moneyReward: string;
//         questType: string;
//         daysLeft: string;
//         nextQuests: NextQuests;
//         questTitle: string;
//         whoToGreet: WhoToGreet;
//         total: string;
//         parts: Parts;
//         objective: Objective;
//         itemIndex: string;
//         number: string;
//         isBigCraftable: string;
//         indexToCraft: string;
//         whereToGo: string;
//         completionString: string;
//         targetMessage: string;
//         monsterName: string;
//         target: string;
//         monster: Monster;
//         numberToKill: string;
//         reward: string;
//         numberKilled: string;
//         dialogueparts: Dialogueparts;
//     }

//     export interface QuestLog {
//         Quest: Quest[];
//     }

//     export interface ExperiencePoints {
//         int: string[];
//     }

//     export interface Item {
//         -xsi:type: string;
//         category: string;
//         name: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         initialParentTileIndex: string;
//         currentParentTileIndex: string;
//         indexOfMenuItemView: string;
//         stackable: string;
//         instantUse: string;
//         upgradeLevel: string;
//         numAttachmentSlots: string;
//         BaseName: string;
//         InitialParentTileIndex: string;
//         IndexOfMenuItemView: string;
//         InstantUse: string;
//         Stackable: string;
//         type: string;
//         minDamage: string;
//         maxDamage: string;
//         speed: string;
//         addedPrecision: string;
//         addedDefense: string;
//         addedAreaOfEffect: string;
//         knockback: string;
//         critChance: string;
//         critMultiplier: string;
//         isOnSpecial: string;
//         waterCanMax: string;
//         WaterLeft: string;
//         -xsi:nil: string;
//     }

//     export interface Items {
//         Item: Item[];
//     }

//     export interface Key {
//         string: string;
//     }

//     export interface Value {
//         int: string;
//     }

//     export interface Item2 {
//         key: Key;
//         value: Value;
//     }

//     export interface CookingRecipes {
//         item: Item2;
//     }

//     export interface Key2 {
//         string: string;
//     }

//     export interface Value2 {
//         int: string;
//     }

//     export interface Item3 {
//         key: Key2;
//         value: Value2;
//     }

//     export interface CraftingRecipes {
//         item: Item3[];
//     }

//     export interface EventsSeen {
//         int: string[];
//     }

//     export interface SongsHeard {
//         string: string[];
//     }

//     export interface MailReceived {
//         string: string[];
//     }

//     export interface Key3 {
//         string: string;
//     }

//     export interface Value3 {
//         int: string;
//     }

//     export interface Item4 {
//         key: Key3;
//         value: Value3;
//     }

//     export interface SpecificMonstersKilled {
//         item: Item4[];
//     }

//     export interface Stats {
//         seedsSown: string;
//         itemsShipped: string;
//         itemsCooked: string;
//         itemsCrafted: string;
//         chickenEggsLayed: string;
//         duckEggsLayed: string;
//         cowMilkProduced: string;
//         goatMilkProduced: string;
//         rabbitWoolProduced: string;
//         sheepWoolProduced: string;
//         cheeseMade: string;
//         goatCheeseMade: string;
//         trufflesFound: string;
//         stoneGathered: string;
//         rocksCrushed: string;
//         dirtHoed: string;
//         giftsGiven: string;
//         timesUnconscious: string;
//         averageBedtime: string;
//         timesFished: string;
//         fishCaught: string;
//         bouldersCracked: string;
//         stumpsChopped: string;
//         stepsTaken: string;
//         monstersKilled: string;
//         diamondsFound: string;
//         prismaticShardsFound: string;
//         otherPreciousGemsFound: string;
//         caveCarrotsFound: string;
//         copperFound: string;
//         ironFound: string;
//         coalFound: string;
//         coinsFound: string;
//         goldFound: string;
//         iridiumFound: string;
//         barsSmelted: string;
//         beveragesMade: string;
//         preservesMade: string;
//         piecesOfTrashRecycled: string;
//         mysticStonesCrushed: string;
//         daysPlayed: string;
//         weedsEliminated: string;
//         sticksChopped: string;
//         notesFound: string;
//         questsCompleted: string;
//         starLevelCropsShipped: string;
//         cropsShipped: string;
//         itemsForaged: string;
//         slimesKilled: string;
//         geodesCracked: string;
//         goodFriends: string;
//         specificMonstersKilled: SpecificMonstersKilled;
//         GoodFriends: string;
//         CropsShipped: string;
//         ItemsForaged: string;
//         GeodesCracked: string;
//         SlimesKilled: string;
//         StarLevelCropsShipped: string;
//         StoneGathered: string;
//         QuestsCompleted: string;
//         FishCaught: string;
//         NotesFound: string;
//         SticksChopped: string;
//         WeedsEliminated: string;
//         DaysPlayed: string;
//         BouldersCracked: string;
//         MysticStonesCrushed: string;
//         GoatCheeseMade: string;
//         CheeseMade: string;
//         PiecesOfTrashRecycled: string;
//         PreservesMade: string;
//         BeveragesMade: string;
//         BarsSmelted: string;
//         IridiumFound: string;
//         GoldFound: string;
//         CoinsFound: string;
//         CoalFound: string;
//         IronFound: string;
//         CopperFound: string;
//         CaveCarrotsFound: string;
//         OtherPreciousGemsFound: string;
//         PrismaticShardsFound: string;
//         DiamondsFound: string;
//         MonstersKilled: string;
//         StepsTaken: string;
//         StumpsChopped: string;
//         TimesFished: string;
//         AverageBedtime: string;
//         TimesUnconscious: string;
//         GiftsGiven: string;
//         DirtHoed: string;
//         RocksCrushed: string;
//         TrufflesFound: string;
//         SheepWoolProduced: string;
//         RabbitWoolProduced: string;
//         GoatMilkProduced: string;
//         CowMilkProduced: string;
//         DuckEggsLayed: string;
//         ItemsCrafted: string;
//         ChickenEggsLayed: string;
//         ItemsCooked: string;
//         ItemsShipped: string;
//         SeedsSown: string;
//     }

//     export interface Tool {
//         -xsi:nil: string;
//     }

//     export interface ToolBox {
//         Tool: Tool[];
//     }

//     export interface Object {
//         -xsi:nil: string;
//     }

//     export interface Cupboard {
//         Object: Object[];
//     }

//     export interface MostRecentBed {
//         X: string;
//         Y: string;
//     }

//     export interface HairstyleColor {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface PantsColor {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface NewEyeColor {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface Key4 {
//         int: string;
//     }

//     export interface Value4 {
//         int: string;
//     }

//     export interface Item5 {
//         key: Key4;
//         value: Value4;
//     }

//     export interface BasicShipped {
//         item: Item5[];
//     }

//     export interface Key5 {
//         int: string;
//     }

//     export interface Value5 {
//         int: string;
//     }

//     export interface Item6 {
//         key: Key5;
//         value: Value5;
//     }

//     export interface MineralsFound {
//         item: Item6[];
//     }

//     export interface Key6 {
//         int: string;
//     }

//     export interface ArrayOfInt {
//         int: string[];
//     }

//     export interface Value6 {
//         ArrayOfInt: ArrayOfInt;
//     }

//     export interface Item7 {
//         key: Key6;
//         value: Value6;
//     }

//     export interface FishCaught {
//         item: Item7;
//     }

//     export interface Key7 {
//         string: string;
//     }

//     export interface Friendship {
//         Points: string;
//         GiftsThisWeek: string;
//         GiftsToday: string;
//         TalkedToToday: string;
//         ProposalRejected: string;
//         Status: string;
//         Proposer: string;
//     }

//     export interface Value7 {
//         Friendship: Friendship;
//     }

//     export interface Item8 {
//         key: Key7;
//         value: Value7;
//     }

//     export interface FriendshipData {
//         item: Item8[];
//     }

//     export interface Key8 {
//         int: string;
//     }

//     export interface Value8 {
//         boolean: string;
//     }

//     export interface Item9 {
//         key: Key8;
//         value: Value8;
//     }

//     export interface ChestConsumedLevels {
//         item: Item9[];
//     }

//     export interface Player {
//         name: string;
//         isEmoting: string;
//         isCharging: string;
//         willDestroyObjectsUnderfoot: string;
//         isGlowing: string;
//         coloredBorder: string;
//         flip: string;
//         drawOnTop: string;
//         faceTowardFarmer: string;
//         ignoreMovementAnimation: string;
//         faceAwayFromFarmer: string;
//         scale: Scale;
//         timeBeforeAIMovementAgain: string;
//         glowingTransparency: string;
//         glowRate: string;
//         Position: Position;
//         Speed: string;
//         FacingDirection: string;
//         Name: string;
//         IsEmoting: string;
//         CurrentEmote: string;
//         Scale: string;
//         questLog: QuestLog;
//         experiencePoints: ExperiencePoints;
//         items: Items;
//         cookingRecipes: CookingRecipes;
//         craftingRecipes: CraftingRecipes;
//         eventsSeen: EventsSeen;
//         songsHeard: SongsHeard;
//         mailReceived: MailReceived;
//         stats: Stats;
//         toolBox: ToolBox;
//         cupboard: Cupboard;
//         farmName: string;
//         favoriteThing: string;
//         slotCanHost: string;
//         catPerson: string;
//         mostRecentBed: MostRecentBed;
//         shirt: string;
//         hair: string;
//         skin: string;
//         shoes: string;
//         accessory: string;
//         facialHair: string;
//         hairstyleColor: HairstyleColor;
//         pantsColor: PantsColor;
//         newEyeColor: NewEyeColor;
//         divorceTonight: string;
//         woodPieces: string;
//         stonePieces: string;
//         copperPieces: string;
//         ironPieces: string;
//         coalPieces: string;
//         goldPieces: string;
//         iridiumPieces: string;
//         quartzPieces: string;
//         caveChoice: string;
//         feed: string;
//         farmingLevel: string;
//         miningLevel: string;
//         combatLevel: string;
//         foragingLevel: string;
//         fishingLevel: string;
//         luckLevel: string;
//         newSkillPointsToSpend: string;
//         addedFarmingLevel: string;
//         addedMiningLevel: string;
//         addedCombatLevel: string;
//         addedForagingLevel: string;
//         addedFishingLevel: string;
//         addedLuckLevel: string;
//         maxStamina: string;
//         maxItems: string;
//         resilience: string;
//         attack: string;
//         immunity: string;
//         attackIncreaseModifier: string;
//         knockbackModifier: string;
//         weaponSpeedModifier: string;
//         critChanceModifier: string;
//         critPowerModifier: string;
//         weaponPrecisionModifier: string;
//         clubCoins: string;
//         daysLeftForToolUpgrade: string;
//         houseUpgradeLevel: string;
//         daysUntilHouseUpgrade: string;
//         coopUpgradeLevel: string;
//         barnUpgradeLevel: string;
//         hasGreenhouse: string;
//         hasUnlockedSkullDoor: string;
//         hasDarkTalisman: string;
//         hasMagicInk: string;
//         showChestColorPicker: string;
//         hasMagnifyingGlass: string;
//         hasWateringCanEnchantment: string;
//         magneticRadius: string;
//         temporaryInvincibilityTimer: string;
//         health: string;
//         maxHealth: string;
//         difficultyModifier: string;
//         isMale: string;
//         hasBusTicket: string;
//         stardewHero: string;
//         hasClubCard: string;
//         hasSpecialCharm: string;
//         basicShipped: BasicShipped;
//         mineralsFound: MineralsFound;
//         fishCaught: FishCaught;
//         friendshipData: FriendshipData;
//         dayOfMonthForSaveGame: string;
//         seasonForSaveGame: string;
//         yearForSaveGame: string;
//         overallsColor: string;
//         shirtColor: string;
//         skinColor: string;
//         hairColor: string;
//         eyeColor: string;
//         chestConsumedLevels: ChestConsumedLevels;
//         saveTime: string;
//         isCustomized: string;
//         homeLocation: string;
//         daysMarried: string;
//         movementMultiplier: string;
//         deepestMineLevel: string;
//         stamina: string;
//         money: string;
//         totalMoneyEarned: string;
//         millisecondsPlayed: string;
//         hasRustyKey: string;
//         hasSkullKey: string;
//         canUnderstandDwarves: string;
//         timesReachedMineBottom: string;
//         UniqueMultiplayerID: string;
//     }

//     export interface WaterColor {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface WallPaper {
//         int: string;
//     }

//     export interface Floor {
//         int: string;
//     }

//     export interface TileLocation {
//         X: string;
//         Y: string;
//     }

//     export interface TileLocation2 {
//         X: string;
//         Y: string;
//     }

//     export interface Location {
//         X: string;
//         Y: string;
//     }

//     export interface BoundingBox {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location;
//     }

//     export interface Scale4 {
//         X: string;
//         Y: string;
//     }

//     export interface Location2 {
//         X: string;
//         Y: string;
//     }

//     export interface SourceRect {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location2;
//     }

//     export interface Location3 {
//         X: string;
//         Y: string;
//     }

//     export interface DefaultSourceRect {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location3;
//     }

//     export interface Location4 {
//         X: string;
//         Y: string;
//     }

//     export interface DefaultBoundingBox {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location4;
//     }

//     export interface HeldObject {
//         -xsi:type: string;
//         category: string;
//         name: string;
//         parentSheetIndex: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         tileLocation: TileLocation2;
//         owner: string;
//         canBeSetDown: string;
//         canBeGrabbed: string;
//         isHoedirt: string;
//         isSpawnedObject: string;
//         questItem: string;
//         questId: string;
//         isOn: string;
//         fragility: string;
//         price: string;
//         edibility: string;
//         stack: string;
//         quality: string;
//         bigCraftable: string;
//         setOutdoors: string;
//         setIndoors: string;
//         readyForHarvest: string;
//         showNextIndex: string;
//         flipped: string;
//         hasBeenPickedUpByFarmer: string;
//         isRecipe: string;
//         isLamp: string;
//         minutesUntilReady: string;
//         boundingBox: BoundingBox;
//         scale: Scale4;
//         uses: string;
//         preservedParentSheetIndex: string;
//         furniture_type: string;
//         rotations: string;
//         currentRotation: string;
//         sourceRect: SourceRect;
//         defaultSourceRect: DefaultSourceRect;
//         defaultBoundingBox: DefaultBoundingBox;
//         drawHeldObjectLow: string;
//     }

//     export interface Location5 {
//         X: string;
//         Y: string;
//     }

//     export interface BoundingBox2 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location5;
//     }

//     export interface Scale5 {
//         X: string;
//         Y: string;
//     }

//     export interface Location6 {
//         X: string;
//         Y: string;
//     }

//     export interface SourceRect2 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location6;
//     }

//     export interface Location7 {
//         X: string;
//         Y: string;
//     }

//     export interface DefaultSourceRect2 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location7;
//     }

//     export interface Location8 {
//         X: string;
//         Y: string;
//     }

//     export interface DefaultBoundingBox2 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location8;
//     }

//     export interface Furniture2 {
//         category: string;
//         name: string;
//         parentSheetIndex: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         tileLocation: TileLocation;
//         owner: string;
//         canBeSetDown: string;
//         canBeGrabbed: string;
//         isHoedirt: string;
//         isSpawnedObject: string;
//         questItem: string;
//         questId: string;
//         isOn: string;
//         fragility: string;
//         price: string;
//         edibility: string;
//         stack: string;
//         quality: string;
//         bigCraftable: string;
//         setOutdoors: string;
//         setIndoors: string;
//         readyForHarvest: string;
//         showNextIndex: string;
//         flipped: string;
//         hasBeenPickedUpByFarmer: string;
//         isRecipe: string;
//         isLamp: string;
//         heldObject: HeldObject;
//         minutesUntilReady: string;
//         boundingBox: BoundingBox2;
//         scale: Scale5;
//         uses: string;
//         preservedParentSheetIndex: string;
//         furniture_type: string;
//         rotations: string;
//         currentRotation: string;
//         sourceRect: SourceRect2;
//         defaultSourceRect: DefaultSourceRect2;
//         defaultBoundingBox: DefaultBoundingBox2;
//         drawHeldObjectLow: string;
//         -xsi:type: string;
//     }

//     export interface Furniture {
//         Furniture: Furniture2[];
//     }

//     export interface TileLocation3 {
//         X: string;
//         Y: string;
//     }

//     export interface Location9 {
//         X: string;
//         Y: string;
//     }

//     export interface BoundingBox3 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location9;
//     }

//     export interface Scale6 {
//         X: string;
//         Y: string;
//     }

//     export interface Tint {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface PlayerChoiceColor {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface Tint2 {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface Fridge {
//         category: string;
//         name: string;
//         parentSheetIndex: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         tileLocation: TileLocation3;
//         owner: string;
//         type: string;
//         canBeSetDown: string;
//         canBeGrabbed: string;
//         isHoedirt: string;
//         isSpawnedObject: string;
//         questItem: string;
//         questId: string;
//         isOn: string;
//         fragility: string;
//         price: string;
//         edibility: string;
//         stack: string;
//         quality: string;
//         bigCraftable: string;
//         setOutdoors: string;
//         setIndoors: string;
//         readyForHarvest: string;
//         showNextIndex: string;
//         flipped: string;
//         hasBeenPickedUpByFarmer: string;
//         isRecipe: string;
//         isLamp: string;
//         minutesUntilReady: string;
//         boundingBox: BoundingBox3;
//         scale: Scale6;
//         uses: string;
//         preservedParentSheetIndex: string;
//         currentLidFrame: string;
//         frameCounter: string;
//         coins: string;
//         tint: Tint;
//         playerChoiceColor: PlayerChoiceColor;
//         playerChest: string;
//         fridge: string;
//         giftbox: string;
//         giftboxIndex: string;
//         Tint: Tint2;
//     }

//     export interface Objects {
//         item: any;
//     }

//     export interface TilePosition {
//         X: string;
//         Y: string;
//     }

//     export interface LargeTerrainFeature {
//         -xsi:type: string;
//         tilePosition: TilePosition;
//         size: string;
//         tileSheetOffset: string;
//         health: string;
//         flipped: string;
//         townBush: string;
//         drawShadow: string;
//     }

//     export interface LargeTerrainFeatures {
//         LargeTerrainFeature: LargeTerrainFeature[];
//     }

//     export interface Vector2 {
//         X: string;
//         Y: string;
//     }

//     export interface Key9 {
//         Vector2: Vector2;
//     }

//     export interface PhaseDays {
//         int: string[];
//     }

//     export interface SeasonsToGrowIn {
//         string: string;
//     }

//     export interface TintColor {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface Crop {
//         phaseDays: PhaseDays;
//         rowInSpriteSheet: string;
//         phaseToShow: string;
//         currentPhase: string;
//         harvestMethod: string;
//         indexOfHarvest: string;
//         regrowAfterHarvest: string;
//         dayOfCurrentPhase: string;
//         minHarvest: string;
//         maxHarvest: string;
//         maxHarvestIncreasePerFarmingLevel: string;
//         daysOfUnclutteredGrowth: string;
//         whichForageCrop: string;
//         seasonsToGrowIn: SeasonsToGrowIn;
//         tintColor: TintColor;
//         flip: string;
//         fullGrown: string;
//         raisedSeeds: string;
//         programColored: string;
//         dead: string;
//         forageCrop: string;
//         chanceForExtraCrops: string;
//     }

//     export interface TerrainFeature {
//         -xsi:type: string;
//         growthStage: string;
//         treeType: string;
//         health: string;
//         flipped: string;
//         stump: string;
//         tapped: string;
//         hasSeed: string;
//         shakeLeft: string;
//         state: string;
//         fertilizer: string;
//         crop: Crop;
//         grassType: string;
//         numberOfWeeds: string;
//         grassSourceOffset: string;
//     }

//     export interface Value9 {
//         TerrainFeature: TerrainFeature;
//     }

//     export interface Item10 {
//         key: Key9;
//         value: Value9;
//     }

//     export interface TerrainFeatures {
//         item: Item10[];
//     }

//     export interface WaterColor2 {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface WallPaper2 {
//         int: string;
//     }

//     export interface Floor2 {
//         int: string;
//     }

//     export interface TileLocation4 {
//         X: string;
//         Y: string;
//     }

//     export interface TileLocation5 {
//         X: string;
//         Y: string;
//     }

//     export interface Location10 {
//         X: string;
//         Y: string;
//     }

//     export interface BoundingBox4 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location10;
//     }

//     export interface Scale7 {
//         X: string;
//         Y: string;
//     }

//     export interface Location11 {
//         X: string;
//         Y: string;
//     }

//     export interface SourceRect3 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location11;
//     }

//     export interface Location12 {
//         X: string;
//         Y: string;
//     }

//     export interface DefaultSourceRect3 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location12;
//     }

//     export interface Location13 {
//         X: string;
//         Y: string;
//     }

//     export interface DefaultBoundingBox3 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location13;
//     }

//     export interface HeldObject2 {
//         -xsi:type: string;
//         category: string;
//         name: string;
//         parentSheetIndex: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         tileLocation: TileLocation5;
//         owner: string;
//         canBeSetDown: string;
//         canBeGrabbed: string;
//         isHoedirt: string;
//         isSpawnedObject: string;
//         questItem: string;
//         questId: string;
//         isOn: string;
//         fragility: string;
//         price: string;
//         edibility: string;
//         stack: string;
//         quality: string;
//         bigCraftable: string;
//         setOutdoors: string;
//         setIndoors: string;
//         readyForHarvest: string;
//         showNextIndex: string;
//         flipped: string;
//         hasBeenPickedUpByFarmer: string;
//         isRecipe: string;
//         isLamp: string;
//         minutesUntilReady: string;
//         boundingBox: BoundingBox4;
//         scale: Scale7;
//         uses: string;
//         preservedParentSheetIndex: string;
//         furniture_type: string;
//         rotations: string;
//         currentRotation: string;
//         sourceRect: SourceRect3;
//         defaultSourceRect: DefaultSourceRect3;
//         defaultBoundingBox: DefaultBoundingBox3;
//         drawHeldObjectLow: string;
//     }

//     export interface Location14 {
//         X: string;
//         Y: string;
//     }

//     export interface BoundingBox5 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location14;
//     }

//     export interface Scale8 {
//         X: string;
//         Y: string;
//     }

//     export interface Location15 {
//         X: string;
//         Y: string;
//     }

//     export interface SourceRect4 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location15;
//     }

//     export interface Location16 {
//         X: string;
//         Y: string;
//     }

//     export interface DefaultSourceRect4 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location16;
//     }

//     export interface Location17 {
//         X: string;
//         Y: string;
//     }

//     export interface DefaultBoundingBox4 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location17;
//     }

//     export interface Furniture4 {
//         category: string;
//         name: string;
//         parentSheetIndex: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         tileLocation: TileLocation4;
//         owner: string;
//         canBeSetDown: string;
//         canBeGrabbed: string;
//         isHoedirt: string;
//         isSpawnedObject: string;
//         questItem: string;
//         questId: string;
//         isOn: string;
//         fragility: string;
//         price: string;
//         edibility: string;
//         stack: string;
//         quality: string;
//         bigCraftable: string;
//         setOutdoors: string;
//         setIndoors: string;
//         readyForHarvest: string;
//         showNextIndex: string;
//         flipped: string;
//         hasBeenPickedUpByFarmer: string;
//         isRecipe: string;
//         isLamp: string;
//         heldObject: HeldObject2;
//         minutesUntilReady: string;
//         boundingBox: BoundingBox5;
//         scale: Scale8;
//         uses: string;
//         preservedParentSheetIndex: string;
//         furniture_type: string;
//         rotations: string;
//         currentRotation: string;
//         sourceRect: SourceRect4;
//         defaultSourceRect: DefaultSourceRect4;
//         defaultBoundingBox: DefaultBoundingBox4;
//         drawHeldObjectLow: string;
//         -xsi:type: string;
//     }

//     export interface Furniture3 {
//         Furniture: Furniture4[];
//     }

//     export interface TileLocation6 {
//         X: string;
//         Y: string;
//     }

//     export interface Location18 {
//         X: string;
//         Y: string;
//     }

//     export interface BoundingBox6 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location18;
//     }

//     export interface Scale9 {
//         X: string;
//         Y: string;
//     }

//     export interface Tint3 {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface PlayerChoiceColor2 {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface Tint4 {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface Fridge2 {
//         category: string;
//         name: string;
//         parentSheetIndex: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         tileLocation: TileLocation6;
//         owner: string;
//         type: string;
//         canBeSetDown: string;
//         canBeGrabbed: string;
//         isHoedirt: string;
//         isSpawnedObject: string;
//         questItem: string;
//         questId: string;
//         isOn: string;
//         fragility: string;
//         price: string;
//         edibility: string;
//         stack: string;
//         quality: string;
//         bigCraftable: string;
//         setOutdoors: string;
//         setIndoors: string;
//         readyForHarvest: string;
//         showNextIndex: string;
//         flipped: string;
//         hasBeenPickedUpByFarmer: string;
//         isRecipe: string;
//         isLamp: string;
//         minutesUntilReady: string;
//         boundingBox: BoundingBox6;
//         scale: Scale9;
//         uses: string;
//         preservedParentSheetIndex: string;
//         currentLidFrame: string;
//         frameCounter: string;
//         coins: string;
//         tint: Tint3;
//         playerChoiceColor: PlayerChoiceColor2;
//         playerChest: string;
//         fridge: string;
//         giftbox: string;
//         giftboxIndex: string;
//         Tint: Tint4;
//     }

//     export interface Scale10 {
//         float: string;
//     }

//     export interface Position4 {
//         X: string;
//         Y: string;
//     }

//     export interface QuestLog2 {
//         Quest: any;
//     }

//     export interface ExperiencePoints2 {
//         int: string[];
//     }

//     export interface Object2 {
//         -xsi:nil: string;
//     }

//     export interface Attachments {
//         Object: Object2[];
//     }

//     export interface Item11 {
//         -xsi:type: string;
//         category: string;
//         name: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         initialParentTileIndex: string;
//         currentParentTileIndex: string;
//         indexOfMenuItemView: string;
//         stackable: string;
//         instantUse: string;
//         upgradeLevel: string;
//         numAttachmentSlots: string;
//         BaseName: string;
//         InitialParentTileIndex: string;
//         IndexOfMenuItemView: string;
//         InstantUse: string;
//         Stackable: string;
//         waterCanMax: string;
//         WaterLeft: string;
//         type: string;
//         minDamage: string;
//         maxDamage: string;
//         speed: string;
//         addedPrecision: string;
//         addedDefense: string;
//         addedAreaOfEffect: string;
//         knockback: string;
//         critChance: string;
//         critMultiplier: string;
//         isOnSpecial: string;
//         -xsi:nil: string;
//         attachments: Attachments;
//     }

//     export interface Items2 {
//         Item: Item11[];
//     }

//     export interface Key10 {
//         string: string;
//     }

//     export interface Value10 {
//         int: string;
//     }

//     export interface Item12 {
//         key: Key10;
//         value: Value10;
//     }

//     export interface CookingRecipes2 {
//         item: Item12;
//     }

//     export interface Key11 {
//         string: string;
//     }

//     export interface Value11 {
//         int: string;
//     }

//     export interface Item13 {
//         key: Key11;
//         value: Value11;
//     }

//     export interface CraftingRecipes2 {
//         item: Item13[];
//     }

//     export interface Key12 {
//         string: string;
//     }

//     export interface Value12 {
//         int: string;
//     }

//     export interface Item14 {
//         key: Key12;
//         value: Value12;
//     }

//     export interface ActiveDialogueEvents {
//         item: Item14;
//     }

//     export interface EventsSeen2 {
//         int: string[];
//     }

//     export interface SongsHeard2 {
//         string: string[];
//     }

//     export interface MailReceived2 {
//         string: string[];
//     }

//     export interface Key13 {
//         string: string;
//     }

//     export interface Value13 {
//         int: string;
//     }

//     export interface Item15 {
//         key: Key13;
//         value: Value13;
//     }

//     export interface SpecificMonstersKilled2 {
//         item: Item15[];
//     }

//     export interface Stats2 {
//         seedsSown: string;
//         itemsShipped: string;
//         itemsCooked: string;
//         itemsCrafted: string;
//         chickenEggsLayed: string;
//         duckEggsLayed: string;
//         cowMilkProduced: string;
//         goatMilkProduced: string;
//         rabbitWoolProduced: string;
//         sheepWoolProduced: string;
//         cheeseMade: string;
//         goatCheeseMade: string;
//         trufflesFound: string;
//         stoneGathered: string;
//         rocksCrushed: string;
//         dirtHoed: string;
//         giftsGiven: string;
//         timesUnconscious: string;
//         averageBedtime: string;
//         timesFished: string;
//         fishCaught: string;
//         bouldersCracked: string;
//         stumpsChopped: string;
//         stepsTaken: string;
//         monstersKilled: string;
//         diamondsFound: string;
//         prismaticShardsFound: string;
//         otherPreciousGemsFound: string;
//         caveCarrotsFound: string;
//         copperFound: string;
//         ironFound: string;
//         coalFound: string;
//         coinsFound: string;
//         goldFound: string;
//         iridiumFound: string;
//         barsSmelted: string;
//         beveragesMade: string;
//         preservesMade: string;
//         piecesOfTrashRecycled: string;
//         mysticStonesCrushed: string;
//         daysPlayed: string;
//         weedsEliminated: string;
//         sticksChopped: string;
//         notesFound: string;
//         questsCompleted: string;
//         starLevelCropsShipped: string;
//         cropsShipped: string;
//         itemsForaged: string;
//         slimesKilled: string;
//         geodesCracked: string;
//         goodFriends: string;
//         specificMonstersKilled: SpecificMonstersKilled2;
//         GoodFriends: string;
//         CropsShipped: string;
//         ItemsForaged: string;
//         GeodesCracked: string;
//         SlimesKilled: string;
//         StarLevelCropsShipped: string;
//         StoneGathered: string;
//         QuestsCompleted: string;
//         FishCaught: string;
//         NotesFound: string;
//         SticksChopped: string;
//         WeedsEliminated: string;
//         DaysPlayed: string;
//         BouldersCracked: string;
//         MysticStonesCrushed: string;
//         GoatCheeseMade: string;
//         CheeseMade: string;
//         PiecesOfTrashRecycled: string;
//         PreservesMade: string;
//         BeveragesMade: string;
//         BarsSmelted: string;
//         IridiumFound: string;
//         GoldFound: string;
//         CoinsFound: string;
//         CoalFound: string;
//         IronFound: string;
//         CopperFound: string;
//         CaveCarrotsFound: string;
//         OtherPreciousGemsFound: string;
//         PrismaticShardsFound: string;
//         DiamondsFound: string;
//         MonstersKilled: string;
//         StepsTaken: string;
//         StumpsChopped: string;
//         TimesFished: string;
//         AverageBedtime: string;
//         TimesUnconscious: string;
//         GiftsGiven: string;
//         DirtHoed: string;
//         RocksCrushed: string;
//         TrufflesFound: string;
//         SheepWoolProduced: string;
//         RabbitWoolProduced: string;
//         GoatMilkProduced: string;
//         CowMilkProduced: string;
//         DuckEggsLayed: string;
//         ItemsCrafted: string;
//         ChickenEggsLayed: string;
//         ItemsCooked: string;
//         ItemsShipped: string;
//         SeedsSown: string;
//     }

//     export interface Tool2 {
//         -xsi:nil: string;
//     }

//     export interface ToolBox2 {
//         Tool: Tool2[];
//     }

//     export interface Object3 {
//         -xsi:nil: string;
//     }

//     export interface Cupboard2 {
//         Object: Object3[];
//     }

//     export interface MostRecentBed2 {
//         X: string;
//         Y: string;
//     }

//     export interface HairstyleColor2 {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface PantsColor2 {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface NewEyeColor2 {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface Boots {
//         category: string;
//         name: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         defenseBonus: string;
//         immunityBonus: string;
//         indexInTileSheet: string;
//         price: string;
//         indexInColorSheet: string;
//     }

//     export interface LeftRing {
//         category: string;
//         name: string;
//         parentSheetIndex: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         price: string;
//         indexInTileSheet: string;
//         uniqueID: string;
//     }

//     export interface Key14 {
//         int: string;
//     }

//     export interface ArrayOfInt2 {
//         int: string[];
//     }

//     export interface Value14 {
//         ArrayOfInt: ArrayOfInt2;
//     }

//     export interface Item16 {
//         key: Key14;
//         value: Value14;
//     }

//     export interface ArchaeologyFound {
//         item: Item16;
//     }

//     export interface Key15 {
//         string: string;
//     }

//     export interface Friendship2 {
//         Points: string;
//         GiftsThisWeek: string;
//         GiftsToday: string;
//         TalkedToToday: string;
//         ProposalRejected: string;
//         Status: string;
//         Proposer: string;
//     }

//     export interface Value15 {
//         Friendship: Friendship2;
//     }

//     export interface Item17 {
//         key: Key15;
//         value: Value15;
//     }

//     export interface FriendshipData2 {
//         item: Item17[];
//     }

//     export interface Key16 {
//         int: string;
//     }

//     export interface Value16 {
//         boolean: string;
//     }

//     export interface Item18 {
//         key: Key16;
//         value: Value16;
//     }

//     export interface ChestConsumedLevels2 {
//         item: Item18;
//     }

//     export interface Key17 {
//         int: string;
//     }

//     export interface Value17 {
//         int: string;
//     }

//     export interface Item19 {
//         key: Key17;
//         value: Value17;
//     }

//     export interface BasicShipped2 {
//         item: Item19[];
//     }

//     export interface Key18 {
//         int: string;
//     }

//     export interface Value18 {
//         int: string;
//     }

//     export interface Item20 {
//         key: Key18;
//         value: Value18;
//     }

//     export interface MineralsFound2 {
//         item: Item20;
//     }

//     export interface Farmhand {
//         name: string;
//         isEmoting: string;
//         isCharging: string;
//         willDestroyObjectsUnderfoot: string;
//         isGlowing: string;
//         coloredBorder: string;
//         flip: string;
//         drawOnTop: string;
//         faceTowardFarmer: string;
//         ignoreMovementAnimation: string;
//         faceAwayFromFarmer: string;
//         scale: Scale10;
//         timeBeforeAIMovementAgain: string;
//         glowingTransparency: string;
//         glowRate: string;
//         Position: Position4;
//         Speed: string;
//         FacingDirection: string;
//         Name: string;
//         IsEmoting: string;
//         CurrentEmote: string;
//         Scale: string;
//         questLog: QuestLog2;
//         experiencePoints: ExperiencePoints2;
//         items: Items2;
//         cookingRecipes: CookingRecipes2;
//         craftingRecipes: CraftingRecipes2;
//         activeDialogueEvents: ActiveDialogueEvents;
//         eventsSeen: EventsSeen2;
//         songsHeard: SongsHeard2;
//         mailReceived: MailReceived2;
//         stats: Stats2;
//         toolBox: ToolBox2;
//         cupboard: Cupboard2;
//         farmName: string;
//         favoriteThing: string;
//         slotCanHost: string;
//         userID: string;
//         catPerson: string;
//         mostRecentBed: MostRecentBed2;
//         shirt: string;
//         hair: string;
//         skin: string;
//         shoes: string;
//         accessory: string;
//         facialHair: string;
//         hairstyleColor: HairstyleColor2;
//         pantsColor: PantsColor2;
//         newEyeColor: NewEyeColor2;
//         boots: Boots;
//         leftRing: LeftRing;
//         divorceTonight: string;
//         woodPieces: string;
//         stonePieces: string;
//         copperPieces: string;
//         ironPieces: string;
//         coalPieces: string;
//         goldPieces: string;
//         iridiumPieces: string;
//         quartzPieces: string;
//         caveChoice: string;
//         feed: string;
//         farmingLevel: string;
//         miningLevel: string;
//         combatLevel: string;
//         foragingLevel: string;
//         fishingLevel: string;
//         luckLevel: string;
//         newSkillPointsToSpend: string;
//         addedFarmingLevel: string;
//         addedMiningLevel: string;
//         addedCombatLevel: string;
//         addedForagingLevel: string;
//         addedFishingLevel: string;
//         addedLuckLevel: string;
//         maxStamina: string;
//         maxItems: string;
//         resilience: string;
//         attack: string;
//         immunity: string;
//         attackIncreaseModifier: string;
//         knockbackModifier: string;
//         weaponSpeedModifier: string;
//         critChanceModifier: string;
//         critPowerModifier: string;
//         weaponPrecisionModifier: string;
//         clubCoins: string;
//         daysLeftForToolUpgrade: string;
//         houseUpgradeLevel: string;
//         daysUntilHouseUpgrade: string;
//         coopUpgradeLevel: string;
//         barnUpgradeLevel: string;
//         hasGreenhouse: string;
//         hasUnlockedSkullDoor: string;
//         hasDarkTalisman: string;
//         hasMagicInk: string;
//         showChestColorPicker: string;
//         hasMagnifyingGlass: string;
//         hasWateringCanEnchantment: string;
//         magneticRadius: string;
//         temporaryInvincibilityTimer: string;
//         health: string;
//         maxHealth: string;
//         difficultyModifier: string;
//         isMale: string;
//         hasBusTicket: string;
//         stardewHero: string;
//         hasClubCard: string;
//         hasSpecialCharm: string;
//         archaeologyFound: ArchaeologyFound;
//         friendshipData: FriendshipData2;
//         dayOfMonthForSaveGame: any;
//         seasonForSaveGame: any;
//         yearForSaveGame: any;
//         overallsColor: string;
//         shirtColor: string;
//         skinColor: string;
//         hairColor: string;
//         eyeColor: string;
//         chestConsumedLevels: ChestConsumedLevels2;
//         saveTime: string;
//         isCustomized: string;
//         homeLocation: string;
//         daysMarried: string;
//         movementMultiplier: string;
//         deepestMineLevel: string;
//         stamina: string;
//         money: string;
//         totalMoneyEarned: string;
//         millisecondsPlayed: string;
//         hasRustyKey: string;
//         hasSkullKey: string;
//         canUnderstandDwarves: string;
//         timesReachedMineBottom: string;
//         UniqueMultiplayerID: string;
//         basicShipped: BasicShipped2;
//         mineralsFound: MineralsFound2;
//     }

//     export interface Vector22 {
//         X: string;
//         Y: string;
//     }

//     export interface Key19 {
//         Vector2: Vector22;
//     }

//     export interface TileLocation7 {
//         X: string;
//         Y: string;
//     }

//     export interface Location19 {
//         X: string;
//         Y: string;
//     }

//     export interface BoundingBox7 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location19;
//     }

//     export interface Scale11 {
//         X: string;
//         Y: string;
//     }

//     export interface TileLocation8 {
//         X: string;
//         Y: string;
//     }

//     export interface Location20 {
//         X: string;
//         Y: string;
//     }

//     export interface BoundingBox8 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location20;
//     }

//     export interface Scale12 {
//         X: string;
//         Y: string;
//     }

//     export interface Item22 {
//         -xsi:type: string;
//         category: string;
//         name: string;
//         parentSheetIndex: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         tileLocation: TileLocation8;
//         owner: string;
//         type: string;
//         canBeSetDown: string;
//         canBeGrabbed: string;
//         isHoedirt: string;
//         isSpawnedObject: string;
//         questItem: string;
//         questId: string;
//         isOn: string;
//         fragility: string;
//         price: string;
//         edibility: string;
//         stack: string;
//         quality: string;
//         bigCraftable: string;
//         setOutdoors: string;
//         setIndoors: string;
//         readyForHarvest: string;
//         showNextIndex: string;
//         flipped: string;
//         hasBeenPickedUpByFarmer: string;
//         isRecipe: string;
//         isLamp: string;
//         minutesUntilReady: string;
//         boundingBox: BoundingBox8;
//         scale: Scale12;
//         uses: string;
//         preservedParentSheetIndex: string;
//     }

//     export interface Items3 {
//         Item: Item22;
//     }

//     export interface Tint5 {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface PlayerChoiceColor3 {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface Tint6 {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface Object4 {
//         -xsi:type: string;
//         category: string;
//         name: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         tileLocation: TileLocation7;
//         owner: string;
//         type: string;
//         canBeSetDown: string;
//         canBeGrabbed: string;
//         isHoedirt: string;
//         isSpawnedObject: string;
//         questItem: string;
//         questId: string;
//         isOn: string;
//         fragility: string;
//         price: string;
//         edibility: string;
//         stack: string;
//         quality: string;
//         bigCraftable: string;
//         setOutdoors: string;
//         setIndoors: string;
//         readyForHarvest: string;
//         showNextIndex: string;
//         flipped: string;
//         hasBeenPickedUpByFarmer: string;
//         isRecipe: string;
//         isLamp: string;
//         minutesUntilReady: string;
//         boundingBox: BoundingBox7;
//         scale: Scale11;
//         uses: string;
//         preservedParentSheetIndex: string;
//         currentLidFrame: string;
//         frameCounter: string;
//         coins: string;
//         items: Items3;
//         tint: Tint5;
//         playerChoiceColor: PlayerChoiceColor3;
//         playerChest: string;
//         fridge: string;
//         giftbox: string;
//         giftboxIndex: string;
//         Tint: Tint6;
//     }

//     export interface Value19 {
//         Object: Object4;
//     }

//     export interface Item21 {
//         key: Key19;
//         value: Value19;
//     }

//     export interface Objects2 {
//         item: Item21;
//     }

//     export interface Indoors {
//         -xsi:type: string;
//         uniqueName: string;
//         name: string;
//         waterColor: WaterColor2;
//         isFarm: string;
//         isOutdoors: string;
//         isStructure: string;
//         ignoreDebrisWeather: string;
//         ignoreOutdoorLighting: string;
//         ignoreLights: string;
//         treatAsOutdoors: string;
//         numberOfSpawnedObjectsOnMap: string;
//         wallPaper: WallPaper2;
//         floor: Floor2;
//         furniture: Furniture3;
//         farmerNumberOfOwner: string;
//         fireplaceOn: string;
//         fridge: Fridge2;
//         farmhand: Farmhand;
//         objects: Objects2;
//     }

//     export interface HumanDoor {
//         X: string;
//         Y: string;
//     }

//     export interface AnimalDoor {
//         X: string;
//         Y: string;
//     }

//     export interface Color {
//         R: string;
//         G: string;
//         B: string;
//         A: string;
//         PackedValue: string;
//     }

//     export interface Building {
//         indoors: Indoors;
//         tileX: string;
//         tileY: string;
//         tilesWide: string;
//         tilesHigh: string;
//         maxOccupants: string;
//         currentOccupants: string;
//         daysOfConstructionLeft: string;
//         daysUntilUpgrade: string;
//         buildingType: string;
//         humanDoor: HumanDoor;
//         animalDoor: AnimalDoor;
//         color: Color;
//         animalDoorOpen: string;
//         magical: string;
//         owner: string;
//         isMoving: string;
//     }

//     export interface Buildings {
//         Building: Building[];
//     }

//     export interface Tile {
//         X: string;
//         Y: string;
//     }

//     export interface ResourceClump {
//         width: string;
//         height: string;
//         parentSheetIndex: string;
//         health: string;
//         tile: Tile;
//     }

//     export interface ResourceClumps {
//         ResourceClump: ResourceClump[];
//     }

//     export interface Characters {
//         NPC: any;
//     }

//     export interface TileLocation9 {
//         X: string;
//         Y: string;
//     }

//     export interface Location21 {
//         X: string;
//         Y: string;
//     }

//     export interface BoundingBox9 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location21;
//     }

//     export interface Scale13 {
//         X: string;
//         Y: string;
//     }

//     export interface Item23 {
//         -xsi:type: string;
//         category: string;
//         name: string;
//         parentSheetIndex: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         tileLocation: TileLocation9;
//         owner: string;
//         type: string;
//         canBeSetDown: string;
//         canBeGrabbed: string;
//         isHoedirt: string;
//         isSpawnedObject: string;
//         questItem: string;
//         questId: string;
//         isOn: string;
//         fragility: string;
//         price: string;
//         edibility: string;
//         stack: string;
//         quality: string;
//         bigCraftable: string;
//         setOutdoors: string;
//         setIndoors: string;
//         readyForHarvest: string;
//         showNextIndex: string;
//         flipped: string;
//         hasBeenPickedUpByFarmer: string;
//         isRecipe: string;
//         isLamp: string;
//         minutesUntilReady: string;
//         boundingBox: BoundingBox9;
//         scale: Scale13;
//         uses: string;
//         preservedParentSheetIndex: string;
//     }

//     export interface ItemsFromPlayerToSell {
//         Item: Item23[];
//     }

//     export interface Tile2 {
//         X: string;
//         Y: string;
//     }

//     export interface Log {
//         width: string;
//         height: string;
//         parentSheetIndex: string;
//         health: string;
//         tile: Tile2;
//     }

//     export interface Tile3 {
//         X: string;
//         Y: string;
//     }

//     export interface ResourceClump2 {
//         width: string;
//         height: string;
//         parentSheetIndex: string;
//         health: string;
//         tile: Tile3;
//     }

//     export interface Stumps {
//         ResourceClump: ResourceClump2[];
//     }

//     export interface AreasComplete {
//         boolean: string[];
//     }

//     export interface Key20 {
//         int: string;
//     }

//     export interface ArrayOfBoolean {
//         boolean: string[];
//     }

//     export interface Value20 {
//         ArrayOfBoolean: ArrayOfBoolean;
//     }

//     export interface Item24 {
//         key: Key20;
//         value: Value20;
//     }

//     export interface Bundles {
//         item: Item24[];
//     }

//     export interface Key21 {
//         int: string;
//     }

//     export interface Value21 {
//         boolean: string;
//     }

//     export interface Item25 {
//         key: Key21;
//         value: Value21;
//     }

//     export interface BundleRewards {
//         item: Item25[];
//     }

//     export interface GameLocation {
//         -xsi:type: string;
//         name: string;
//         waterColor: WaterColor;
//         isFarm: string;
//         isOutdoors: string;
//         isStructure: string;
//         ignoreDebrisWeather: string;
//         ignoreOutdoorLighting: string;
//         ignoreLights: string;
//         treatAsOutdoors: string;
//         numberOfSpawnedObjectsOnMap: string;
//         wallPaper: WallPaper;
//         floor: Floor;
//         furniture: Furniture;
//         farmerNumberOfOwner: string;
//         fireplaceOn: string;
//         fridge: Fridge;
//         objects: Objects;
//         largeTerrainFeatures: LargeTerrainFeatures;
//         terrainFeatures: TerrainFeatures;
//         buildings: Buildings;
//         resourceClumps: ResourceClumps;
//         piecesOfHay: string;
//         grandpaScore: string;
//         hasSeenGrandpaNote: string;
//         daysUntilCommunityUpgrade: string;
//         characters: Characters;
//         itemsFromPlayerToSell: ItemsFromPlayerToSell;
//         bridgeFixed: string;
//         log: Log;
//         stockSeed: string;
//         drivingOff: string;
//         drivingBack: string;
//         leaving: string;
//         stumps: Stumps;
//         hasUnlockedStatue: string;
//         witchStatueGone: string;
//         areasComplete: AreasComplete;
//         numberOfStarsOnPlaque: string;
//         bundles: Bundles;
//         bundleRewards: BundleRewards;
//         submerged: string;
//         ascending: string;
//     }

//     export interface Locations {
//         GameLocation: GameLocation[];
//     }

//     export interface CountdownToWedding {
//         -xsi:nil: string;
//     }

//     export interface IncubatingEgg {
//         X: string;
//         Y: string;
//     }

//     export interface CropsOfTheWeek {
//         int: string[];
//     }

//     export interface TileLocation10 {
//         X: string;
//         Y: string;
//     }

//     export interface Location22 {
//         X: string;
//         Y: string;
//     }

//     export interface BoundingBox10 {
//         X: string;
//         Y: string;
//         Width: string;
//         Height: string;
//         Location: Location22;
//     }

//     export interface Scale14 {
//         X: string;
//         Y: string;
//     }

//     export interface DishOfTheDay {
//         category: string;
//         name: string;
//         parentSheetIndex: string;
//         specialItem: string;
//         hasBeenInInventory: string;
//         SpecialVariable: string;
//         Category: string;
//         ParentSheetIndex: string;
//         DisplayName: string;
//         Name: string;
//         Stack: string;
//         tileLocation: TileLocation10;
//         owner: string;
//         type: string;
//         canBeSetDown: string;
//         canBeGrabbed: string;
//         isHoedirt: string;
//         isSpawnedObject: string;
//         questItem: string;
//         questId: string;
//         isOn: string;
//         fragility: string;
//         price: string;
//         edibility: string;
//         stack: string;
//         quality: string;
//         bigCraftable: string;
//         setOutdoors: string;
//         setIndoors: string;
//         readyForHarvest: string;
//         showNextIndex: string;
//         flipped: string;
//         hasBeenPickedUpByFarmer: string;
//         isRecipe: string;
//         isLamp: string;
//         minutesUntilReady: string;
//         boundingBox: BoundingBox10;
//         scale: Scale14;
//         uses: string;
//         preservedParentSheetIndex: string;
//     }

//     export interface InputButton {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface ActionButton {
//         InputButton: InputButton[];
//     }

//     export interface InputButton2 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface CancelButton {
//         InputButton: InputButton2;
//     }

//     export interface InputButton3 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface UseToolButton {
//         InputButton: InputButton3[];
//     }

//     export interface InputButton4 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface MoveUpButton {
//         InputButton: InputButton4;
//     }

//     export interface InputButton5 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface MoveRightButton {
//         InputButton: InputButton5;
//     }

//     export interface InputButton6 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface MoveDownButton {
//         InputButton: InputButton6;
//     }

//     export interface InputButton7 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface MoveLeftButton {
//         InputButton: InputButton7;
//     }

//     export interface InputButton8 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface MenuButton {
//         InputButton: InputButton8[];
//     }

//     export interface InputButton9 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface RunButton {
//         InputButton: InputButton9;
//     }

//     export interface InputButton10 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface TmpKeyToReplace {
//         InputButton: InputButton10;
//     }

//     export interface InputButton11 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface ChatButton {
//         InputButton: InputButton11[];
//     }

//     export interface InputButton12 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface MapButton {
//         InputButton: InputButton12;
//     }

//     export interface InputButton13 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface JournalButton {
//         InputButton: InputButton13;
//     }

//     export interface InputButton14 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface InventorySlot1 {
//         InputButton: InputButton14;
//     }

//     export interface InputButton15 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface InventorySlot2 {
//         InputButton: InputButton15;
//     }

//     export interface InputButton16 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface InventorySlot3 {
//         InputButton: InputButton16;
//     }

//     export interface InputButton17 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface InventorySlot4 {
//         InputButton: InputButton17;
//     }

//     export interface InputButton18 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface InventorySlot5 {
//         InputButton: InputButton18;
//     }

//     export interface InputButton19 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface InventorySlot6 {
//         InputButton: InputButton19;
//     }

//     export interface InputButton20 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface InventorySlot7 {
//         InputButton: InputButton20;
//     }

//     export interface InputButton21 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface InventorySlot8 {
//         InputButton: InputButton21;
//     }

//     export interface InputButton22 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface InventorySlot9 {
//         InputButton: InputButton22;
//     }

//     export interface InputButton23 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface InventorySlot10 {
//         InputButton: InputButton23;
//     }

//     export interface InputButton24 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface InventorySlot11 {
//         InputButton: InputButton24;
//     }

//     export interface InputButton25 {
//         key: string;
//         mouseLeft: string;
//         mouseRight: string;
//     }

//     export interface InventorySlot12 {
//         InputButton: InputButton25;
//     }

//     export interface Options {
//         autoRun: string;
//         dialogueTyping: string;
//         fullscreen: string;
//         windowedBorderlessFullscreen: string;
//         showPortraits: string;
//         showMerchantPortraits: string;
//         showMenuBackground: string;
//         playFootstepSounds: string;
//         alwaysShowToolHitLocation: string;
//         hideToolHitLocationWhenInMotion: string;
//         pauseWhenOutOfFocus: string;
//         pinToolbarToggle: string;
//         mouseControls: string;
//         keyboardControls: string;
//         gamepadControls: string;
//         rumble: string;
//         ambientOnlyToggle: string;
//         zoomButtons: string;
//         invertScrollDirection: string;
//         screenFlash: string;
//         hardwareCursor: string;
//         showPlacementTileForGamepad: string;
//         snappyMenus: string;
//         ipConnectionsEnabled: string;
//         enableServer: string;
//         enableFarmhandCreation: string;
//         musicVolumeLevel: string;
//         soundVolumeLevel: string;
//         zoomLevel: string;
//         footstepVolumeLevel: string;
//         ambientVolumeLevel: string;
//         snowTransparency: string;
//         preferredResolutionX: string;
//         preferredResolutionY: string;
//         lightingQuality: string;
//         serverPrivacy: string;
//         actionButton: ActionButton;
//         cancelButton: CancelButton;
//         useToolButton: UseToolButton;
//         moveUpButton: MoveUpButton;
//         moveRightButton: MoveRightButton;
//         moveDownButton: MoveDownButton;
//         moveLeftButton: MoveLeftButton;
//         menuButton: MenuButton;
//         runButton: RunButton;
//         tmpKeyToReplace: TmpKeyToReplace;
//         chatButton: ChatButton;
//         mapButton: MapButton;
//         journalButton: JournalButton;
//         inventorySlot1: InventorySlot1;
//         inventorySlot2: InventorySlot2;
//         inventorySlot3: InventorySlot3;
//         inventorySlot4: InventorySlot4;
//         inventorySlot5: InventorySlot5;
//         inventorySlot6: InventorySlot6;
//         inventorySlot7: InventorySlot7;
//         inventorySlot8: InventorySlot8;
//         inventorySlot9: InventorySlot9;
//         inventorySlot10: InventorySlot10;
//         inventorySlot11: InventorySlot11;
//         inventorySlot12: InventorySlot12;
//     }

//     export interface Key22 {
//         int: string;
//     }

//     export interface MineInfo {
//         platformContainersLeft: string;
//         chestsLeft: string;
//         coalCartsLeft: string;
//         elevator: string;
//     }

//     export interface Value22 {
//         MineInfo: MineInfo;
//     }

//     export interface Item26 {
//         key: Key22;
//         value: Value22;
//     }

//     export interface MinePermanentMineChanges {
//         item: Item26[];
//     }

//     export interface FarmerPair {
//         Farmer1: string;
//         Farmer2: string;
//     }

//     export interface Key23 {
//         FarmerPair: FarmerPair;
//     }

//     export interface Friendship3 {
//         Points: string;
//         GiftsThisWeek: string;
//         GiftsToday: string;
//         TalkedToToday: string;
//         ProposalRejected: string;
//         Status: string;
//         Proposer: string;
//     }

//     export interface Value23 {
//         Friendship: Friendship3;
//     }

//     export interface Item27 {
//         key: Key23;
//         value: Value23;
//     }

//     export interface FarmerFriendships {
//         item: Item27[];
//     }

//     export interface SaveGame {
//         -xmlns:xsi: string;
//         -xmlns:xsd: string;
//         player: Player;
//         locations: Locations;
//         currentSeason: string;
//         samBandName: string;
//         elliottBookName: string;
//         dayOfMonth: string;
//         year: string;
//         farmerWallpaper: string;
//         FarmerFloor: string;
//         currentWallpaper: string;
//         currentFloor: string;
//         currentSongIndex: string;
//         countdownToWedding: CountdownToWedding;
//         incubatingEgg: IncubatingEgg;
//         chanceToRainTomorrow: string;
//         dailyLuck: string;
//         uniqueIDForThisGame: string;
//         weddingToday: string;
//         isRaining: string;
//         isDebrisWeather: string;
//         shippingTax: string;
//         bloomDay: string;
//         isLightning: string;
//         isSnowing: string;
//         shouldSpawnMonsters: string;
//         hasApplied1_3_UpdateChanges: string;
//         musicVolume: string;
//         soundVolume: string;
//         cropsOfTheWeek: CropsOfTheWeek;
//         dishOfTheDay: DishOfTheDay;
//         latestID: string;
//         options: Options;
//         mine_permanentMineChanges: MinePermanentMineChanges;
//         mine_lowestLevelReached: string;
//         minecartHighScore: string;
//         weatherForTomorrow: string;
//         whichFarm: string;
//         farmerFriendships: FarmerFriendships;
//     }

//     export interface RootObject {
//         SaveGame: SaveGame;
//     }

// }

