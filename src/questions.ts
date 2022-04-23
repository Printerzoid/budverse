// Heads
import oval_head from "./assets/heads/oval_head.png";
import circle_head from "./assets/heads/circle_head.png";
import heart_head from "./assets/heads/heart_head.png";
import square_head from "./assets/heads/square_head.png";
import rectangle_head from "./assets/heads/rectangle_head.png";
import diamond_head from "./assets/heads/diamond_head.png";
import triangle_head from "./assets/heads/triangle_head.png";
import clover_head from "./assets/heads/clover_head.png";
import hexagon_head from "./assets/heads/hexagon_head.png";
import star_head from "./assets/heads/star_head.png";

// Skins
import gray_skin from "./assets/skins/gray.png";
import red_skin from "./assets/skins/red.png";
import purple_skin from "./assets/skins/purple.png";
import cyan_skin from "./assets/skins/cyan.png";
import green_skin from "./assets/skins/green.png";
import blue_skin from "./assets/skins/blue.png";
import pink_skin from "./assets/skins/pink.png";
import yellow_skin from "./assets/skins/yellow.png";
import orange_skin from "./assets/skins/orange.png";
import magenta_skin from "./assets/skins/magenta.png";

// Hair back
import tomato_hair_back from "./assets/hair/tomato_hair_back.png";
import low_buns_back from "./assets/hair/low_buns_back.png";
import curled_hair_back from "./assets/hair/curled_hair_back.png";
import slicked_back_hair_back from "./assets/hair/slicked_back_hair_back.png";
import starshaped_afro_back from "./assets/hair/starshaped_afro_back.png";
import jellyfish_hair_back from "./assets/hair/jellyfish_hair_back.png";

// Hair front
import tomato_hair_front from "./assets/hair/tomato_hair_front.png";
import low_buns_front from "./assets/hair/low_buns_front.png";
import curled_hair_front from "./assets/hair/curled_hair_front.png";
import slicked_back_hair_front from "./assets/hair/slicked_back_hair_front.png";
import undercut_hair from "./assets/hair/undercut_hair.png";
import starshaped_afro_front from "./assets/hair/starshaped_afro_front.png";
import spiky_hair from "./assets/hair/spiky_hair.png";
import flame_hair from "./assets/hair/flame_hair.png";
import jellyfish_hair_front from "./assets/hair/jellyfish_hair_front.png";
import moustache_hair from "./assets/hair/moustache_hair.png";

// Facial Features
import freckles from "./assets/facial_features/freckles.png";
import acne from "./assets/facial_features/acne.png";
import beard from "./assets/facial_features/beard.png";
import fish_scales from "./assets/facial_features/fish_scales.png";
import broken_horn from "./assets/facial_features/broken_horn.png";
import horns from "./assets/facial_features/horns.png";
import extra_eye from "./assets/facial_features/extra_eye.png";
import scratches from "./assets/facial_features/scratches.png";
import wings from "./assets/facial_features/wings.png";
import animal from "./assets/facial_features/animal.png";
import tattoos from "./assets/facial_features/tattoos.png";
import teeth from "./assets/facial_features/teeth.png";
import plant from "./assets/facial_features/plant.png";

// Eyes
import brown_eyes from "./assets/eyes/brown_eyes.png";
import blue_eyes from "./assets/eyes/blue_eyes.png";
import green_eyes from "./assets/eyes/green_eyes.png";
import black_eyes from "./assets/eyes/black_eyes.png";
import red_eyes from "./assets/eyes/red_eyes.png";
import purple_eyes from "./assets/eyes/purple_eyes.png";
import hazel_eyes from "./assets/eyes/hazel_eyes.png";
import yellow_eyes from "./assets/eyes/yellow_eyes.png";
import white_eyes from "./assets/eyes/white_eyes.png";
import orange_eyes from "./assets/eyes/orange_eyes.png";

// Nose
import triangle_nose from "./assets/noses/triangle_nose.png";
import circle_nose from "./assets/noses/circle_nose.png";
import rectangle_nose from "./assets/noses/rectangle_nose.png";
import square_nose from "./assets/noses/square_nose.png";
import oval_nose from "./assets/noses/oval_nose.png";
import star_nose from "./assets/noses/star_nose.png";
import heart_nose from "./assets/noses/heart_nose.png";
import clover_nose from "./assets/noses/clover_nose.png";
import house_nose from "./assets/noses/house_nose.png";

// Lips
import buttons_lips from "./assets/lips/buttons_lips.png";
import shark_lips from "./assets/lips/shark_lips.png";
import fangs_lips from "./assets/lips/fangs_lips.png";
import monster_lips from "./assets/lips/monster_lips.png";
import plump_lips from "./assets/lips/plump_lips.png";
import stitches_lips from "./assets/lips/stitches_lips.png";
import meme_lips from "./assets/lips/meme_lips.png";
import snake_lips from "./assets/lips/snake_lips.png";
import cat_lips from "./assets/lips/cat_lips.png";
import mask_lips from "./assets/lips/mask_lips.png";

// Eyebrows
import eyebrow_1 from "./assets/eyebrows/eyebrow_1.png";
import eyebrow_2 from "./assets/eyebrows/eyebrow_2.png";
import eyebrow_3 from "./assets/eyebrows/eyebrow_3.png";
import eyebrow_4 from "./assets/eyebrows/eyebrow_4.png";
import eyebrow_5 from "./assets/eyebrows/eyebrow_5.png";
import eyebrow_6 from "./assets/eyebrows/eyebrow_6.png";
import eyebrow_7 from "./assets/eyebrows/eyebrow_7.png";
import eyebrow_8 from "./assets/eyebrows/eyebrow_8.png";
import eyebrow_9 from "./assets/eyebrows/eyebrow_9.png";

// Backgrounds
import bathroom from "./assets/backgrounds/bathroom.png";
import ocean from "./assets/backgrounds/ocean.png";
import space from "./assets/backgrounds/space.png";
import mountain from "./assets/backgrounds/mountain.png";
import sky from "./assets/backgrounds/sky.png";
import cn_tower from "./assets/backgrounds/cn_tower.png";
import hell from "./assets/backgrounds/hell.png";

// Other
import frame from "./assets/other/frame.png";
import shirt from "./assets/other/shirt.png";

export interface Question {
    prompt: string;
    options: string[];
}

export interface CharacterPartRequirement {
    question: number;
    option: number;
}

export interface CharacterPart {
    required: CharacterPartRequirement[];
    image: string;
    mode: GlobalCompositeOperation;
}

export const CHARACTER_PARTS: CharacterPart[] = [
    // Heads
    { required: [{ question: 0, option: 0 }], image: oval_head, mode: "copy" },
    { required: [{ question: 0, option: 1 }], image: circle_head, mode: "copy" },
    { required: [{ question: 0, option: 2 }], image: heart_head, mode: "copy" },
    { required: [{ question: 0, option: 3 }], image: square_head, mode: "copy" },
    { required: [{ question: 0, option: 4 }], image: rectangle_head, mode: "copy" },
    { required: [{ question: 0, option: 5 }], image: diamond_head, mode: "copy" },
    { required: [{ question: 0, option: 6 }], image: triangle_head, mode: "copy" },
    { required: [{ question: 0, option: 7 }], image: clover_head, mode: "copy" },
    { required: [{ question: 0, option: 8 }], image: hexagon_head, mode: "copy" },
    { required: [{ question: 0, option: 9 }], image: star_head, mode: "copy" },

    // Head Color
    { required: [{ question: 1, option: 0 }], image: gray_skin, mode: "multiply" },
    { required: [{ question: 1, option: 1 }], image: red_skin, mode: "multiply" },
    { required: [{ question: 1, option: 2 }], image: purple_skin, mode: "multiply" },
    { required: [{ question: 1, option: 3 }], image: cyan_skin, mode: "multiply" },
    { required: [{ question: 1, option: 4 }], image: green_skin, mode: "multiply" },
    { required: [{ question: 1, option: 5 }], image: blue_skin, mode: "multiply" },
    { required: [{ question: 1, option: 6 }], image: pink_skin, mode: "multiply" },
    { required: [{ question: 1, option: 7 }], image: yellow_skin, mode: "multiply" },
    { required: [{ question: 1, option: 8 }], image: orange_skin, mode: "multiply" },
    { required: [{ question: 1, option: 9 }], image: magenta_skin, mode: "multiply" },

    // Head clip
    { required: [{ question: 0, option: 0 }], image: oval_head, mode: "destination-in" },
    { required: [{ question: 0, option: 1 }], image: circle_head, mode: "destination-in" },
    { required: [{ question: 0, option: 2 }], image: heart_head, mode: "destination-in" },
    { required: [{ question: 0, option: 3 }], image: square_head, mode: "destination-in" },
    { required: [{ question: 0, option: 4 }], image: rectangle_head, mode: "destination-in" },
    { required: [{ question: 0, option: 5 }], image: diamond_head, mode: "destination-in" },
    { required: [{ question: 0, option: 6 }], image: triangle_head, mode: "destination-in" },
    { required: [{ question: 0, option: 7 }], image: clover_head, mode: "destination-in" },
    { required: [{ question: 0, option: 8 }], image: hexagon_head, mode: "destination-in" },
    { required: [{ question: 0, option: 9 }], image: star_head, mode: "destination-in" },

    // Facial Features behind
    { required: [{ question: 3, option: 0 }], image: freckles, mode: "source-over" },
    { required: [{ question: 3, option: 1 }], image: acne, mode: "source-over" },
    { required: [{ question: 3, option: 2 }], image: beard, mode: "source-over" },
    { required: [{ question: 3, option: 3 }], image: fish_scales, mode: "source-over" },
    { required: [{ question: 3, option: 6 }], image: extra_eye, mode: "source-over" },
    { required: [{ question: 3, option: 7 }], image: scratches, mode: "source-over" },
    { required: [{ question: 3, option: 10 }], image: tattoos, mode: "source-over" },
    { required: [{ question: 3, option: 11 }], image: teeth, mode: "source-over" },

    // Shirt
    { required: [], image: shirt, mode: "source-over" },

    // Hair back
    { required: [{ question: 2, option: 1 }], image: tomato_hair_back, mode: "destination-over" },
    { required: [{ question: 2, option: 2 }], image: low_buns_back, mode: "destination-over" },
    { required: [{ question: 2, option: 3 }], image: curled_hair_back, mode: "destination-over" },
    { required: [{ question: 2, option: 4 }], image: slicked_back_hair_back, mode: "destination-over" },
    { required: [{ question: 2, option: 6 }], image: starshaped_afro_back, mode: "destination-over" },
    { required: [{ question: 2, option: 9 }], image: jellyfish_hair_back, mode: "destination-over" },


    // Hair front
    { required: [{ question: 2, option: 1 }], image: tomato_hair_front, mode: "source-over" },
    { required: [{ question: 2, option: 2 }], image: low_buns_front, mode: "source-over" },
    { required: [{ question: 2, option: 3 }], image: curled_hair_front, mode: "source-over" },
    { required: [{ question: 2, option: 4 }], image: slicked_back_hair_front, mode: "source-over" },
    { required: [{ question: 2, option: 5 }], image: undercut_hair, mode: "source-over" },
    { required: [{ question: 2, option: 6 }], image: starshaped_afro_front, mode: "source-over" },
    { required: [{ question: 2, option: 7 }], image: spiky_hair, mode: "source-over" },
    { required: [{ question: 2, option: 8 }], image: flame_hair, mode: "source-over" },
    { required: [{ question: 2, option: 9 }], image: jellyfish_hair_front, mode: "source-over" },
    { required: [{ question: 2, option: 10 }], image: moustache_hair, mode: "source-over" },

    // Facial Features in front
    { required: [{ question: 3, option: 8 }], image: wings, mode: "destination-over" },
    { required: [{ question: 3, option: 4 }], image: broken_horn, mode: "source-over" },
    { required: [{ question: 3, option: 5 }], image: horns, mode: "source-over" },
    { required: [{ question: 3, option: 9 }], image: animal, mode: "source-over" },
    { required: [{ question: 3, option: 12 }], image: plant, mode: "source-over" },

    // Eyes
    { required: [{ question: 4, option: 0 }], image: brown_eyes, mode: "source-over" },
    { required: [{ question: 4, option: 1 }], image: blue_eyes, mode: "source-over" },
    { required: [{ question: 4, option: 2 }], image: green_eyes, mode: "source-over" },
    { required: [{ question: 4, option: 3 }], image: black_eyes, mode: "source-over" },
    { required: [{ question: 4, option: 4 }], image: red_eyes, mode: "source-over" },
    { required: [{ question: 4, option: 5 }], image: purple_eyes, mode: "source-over" },
    { required: [{ question: 4, option: 6 }], image: hazel_eyes, mode: "source-over" },
    { required: [{ question: 4, option: 7 }], image: yellow_eyes, mode: "source-over" },
    { required: [{ question: 4, option: 8 }], image: white_eyes, mode: "source-over" },
    { required: [{ question: 4, option: 9 }], image: orange_eyes, mode: "source-over" },

    // Noses
    { required: [{ question: 5, option: 1 }], image: triangle_nose, mode: "source-over" },
    { required: [{ question: 5, option: 2 }], image: circle_nose, mode: "source-over" },
    { required: [{ question: 5, option: 3 }], image: rectangle_nose, mode: "source-over" },
    { required: [{ question: 5, option: 4 }], image: square_nose, mode: "source-over" },
    { required: [{ question: 5, option: 5 }], image: oval_nose, mode: "source-over" },
    { required: [{ question: 5, option: 6 }], image: star_nose, mode: "source-over" },
    { required: [{ question: 5, option: 7 }], image: heart_nose, mode: "source-over" },
    { required: [{ question: 5, option: 8 }], image: clover_nose, mode: "source-over" },
    { required: [{ question: 5, option: 9 }], image: house_nose, mode: "source-over" },

    // Lips
    { required: [{ question: 6, option: 0 }], image: buttons_lips, mode: "source-over" },
    { required: [{ question: 6, option: 1 }], image: shark_lips, mode: "source-over" },
    { required: [{ question: 6, option: 2 }], image: fangs_lips, mode: "source-over" },
    { required: [{ question: 6, option: 3 }], image: monster_lips, mode: "source-over" },
    { required: [{ question: 6, option: 4 }], image: plump_lips, mode: "source-over" },
    { required: [{ question: 6, option: 5 }], image: stitches_lips, mode: "source-over" },
    { required: [{ question: 6, option: 6 }], image: meme_lips, mode: "source-over" },
    { required: [{ question: 6, option: 7 }], image: snake_lips, mode: "source-over" },
    { required: [{ question: 6, option: 8 }], image: cat_lips, mode: "source-over" },
    { required: [{ question: 6, option: 9 }], image: mask_lips, mode: "source-over" },

    // Eyebrows
    { required: [{ question: 7, option: 1 }], image: eyebrow_1, mode: "source-over" },
    { required: [{ question: 7, option: 2 }], image: eyebrow_2, mode: "source-over" },
    { required: [{ question: 7, option: 3 }], image: eyebrow_3, mode: "source-over" },
    { required: [{ question: 7, option: 4 }], image: eyebrow_4, mode: "source-over" },
    { required: [{ question: 7, option: 5 }], image: eyebrow_5, mode: "source-over" },
    { required: [{ question: 7, option: 6 }], image: eyebrow_6, mode: "source-over" },
    { required: [{ question: 7, option: 7 }], image: eyebrow_7, mode: "source-over" },
    { required: [{ question: 7, option: 8 }], image: eyebrow_8, mode: "source-over" },
    { required: [{ question: 7, option: 9 }], image: eyebrow_9, mode: "source-over" },

    // Backgrounds
    { required: [{ question: 8, option: 0 }], image: bathroom, mode: "destination-over" },
    { required: [{ question: 8, option: 1 }], image: ocean, mode: "destination-over" },
    { required: [{ question: 8, option: 2 }], image: space, mode: "destination-over" },
    { required: [{ question: 8, option: 3 }], image: mountain, mode: "destination-over" },
    { required: [{ question: 8, option: 4 }], image: sky, mode: "destination-over" },
    { required: [{ question: 8, option: 5 }], image: cn_tower, mode: "destination-over" },
    { required: [{ question: 8, option: 6 }], image: hell, mode: "destination-over" },

    // Background Clip
    { required: [{ question: 8, option: 0 }], image: bathroom, mode: "destination-in" },
    { required: [{ question: 8, option: 1 }], image: ocean, mode: "destination-in" },
    { required: [{ question: 8, option: 2 }], image: space, mode: "destination-in" },
    { required: [{ question: 8, option: 3 }], image: mountain, mode: "destination-in" },
    { required: [{ question: 8, option: 4 }], image: sky, mode: "destination-in" },
    { required: [{ question: 8, option: 5 }], image: cn_tower, mode: "destination-in" },
    { required: [{ question: 8, option: 6 }], image: hell, mode: "destination-in" },

    // Other
    { required: [], image: frame, mode: "source-over" },
];

export const QUESTIONS = [
    {
        prompt: "How are you currently feeling?",
        options: [
            "Scared",
            "Annoyed",
            "Envious",
            "Overwhelmed",
            "Sad",
            "Optimistic",
            "Excited",
            "Lucky",
            "Relaxed",
            "Proud",
        ]
    },
    {
        prompt: "How do you comfort yourself?",
        options: [
            "A long cry",
            "Take a relaxing bath or shower",
            "Listen to music",
            "Do an indoor activity",
            "Do an outside activity",
            "Take a nap",
            "Seek loved ones for comfort",
            "Eat a favorite snack",
            "Watch movies or TV shows",
            "Play games",
        ]
    },
    {
        prompt: "What's your biggest fear?",
        options: [
            "Disease",
            "Change",
            "Clowns",
            "Falling",
            "Insects",
            "Imperfection",
            "Darkness",
            "Aging",
            "Socializing",
            "Drowning",
            "Being alone",
        ]
    },
    {
        prompt: "What are you insecure about?",
        options: [
            "Not having friends",
            "Nothing",
            "My confidence",
            "My skills",
            "Depending on others",
            "Being unapproachable",
            "Comparing myself",
            "Being not good enough",
            "My intelligence",
            "Not being able to make others happy",
            "Judgment",
            "Overeating",
            "Over procrastinating",
        ]
    },
    {
        prompt: "What upsets you the most?",
        options: [
            "Being blamed for something I didn't do",
            "When loved ones are upset",
            "Being left out by friends",
            "Other people's opinions",
            "Getting rejected",
            "Disrespect from others",
            "People who don't listen",
            "A colleague not doing their work",
            "Not being told the truth",
            "Myself",
        ]
    },
    {
        prompt: "What are you thankful for?",
        options: [
            "My existance",
            "My close friends",
            "My partner",
            "My teachers",
            "My job",
            "My health",
            "My pet(s)",
            "My family",
            "My education",
            "My house",
        ]
    },
    {
        prompt: "What makes you happy?",
        options: [
            "Creating",
            "Physical affection",
            "Alone time",
            "Being around loved ones",
            "Treating myself",
            "Helping others",
            "Funny memes",
            "Alcohol",
            "My pets",
            "Drugs"
        ]
    },
    {
        prompt: "How would you describe yourself in one word?",
        options: [
            "Independent",
            "Organized",
            "Honest",
            "Overthinker",
            "Shy",
            "Creative",
            "Lazy",
            "Assertive",
            "Energetic",
            "Soulless"
        ]
    },
    {
        prompt: "What would you do on a break?",
        options: [
            "Stay home",
            "Go to the beach",
            "Star Gaze",
            "Hike",
            "Visit friends and family",
            "Travel",
            "I don't take breaks",
        ]
    },
];