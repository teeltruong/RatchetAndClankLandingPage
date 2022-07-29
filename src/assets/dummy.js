import {
    cardRatchet,
    cardClank,
    cardRivet,
    cardDrNefarious,
    ratchet,
    clank,
    rivet,
    drNefarious,
    bgRatchet,
    bgClank,
    bgRivet,
    bgDrNefarious

} from './images'

export const championsData = [
    {
        img: ratchet,
        name: 'ratchet',
        bg: cardRatchet,
        nickName: 'THE ROGUE ASSASSIN',
        role: 'ASSASSIN',
        difficulty: 'MODERATE',
        description: `Ratchet's a hero with a heart of gold and arsenal of destruction. He’s never far from his pal Clank.
        An adept mechanic, Ratchet has used his ingenuity to save the universe more times than he can count. But, it turns out there’s a whole lot more universe to save than he thought...`,
        video: 'i-f0PyD4PYI',
        bgLarge: bgRatchet
    },
    {
        img: clank,
        name: 'clank',
        bg: cardClank,
        nickName: 'THE BOUNTY HUNTER',
        role: 'MARKSMAN',
        difficulty: 'LOW',
        description: 'This pint-sized hero is the voice of reason in the Ratchet & Clank duo. Through thick and thin, he’s always had Ratchet’s back—usually by riding on it. Stranded in a strange new dimension, he’ll need every ounce of wit he can muster to prevent a total dimensional collapse.',
        video: 'NmJYPPkJBPA',
        bgLarge: bgClank
    },
    {
        img: rivet,
        name: 'rivet',
        bg: cardRivet,
        nickName: 'THE FROST ARCHER',
        role: 'MARKSMAN',
        difficulty: 'MODERATE',
        description: `This lone wolf Resistance fighter is putting her maker skills to the test as she goes all-in to fight evil and make the Omniverse a safer place for the rest of us.
        But meeting Ratchet and Clank has thrown an Omniwrench in her plans and she’ll have to learn to trust her new friends—that is, if she ever hopes to defeat Dr. Nefarious and his interdimensional counterpart.`,
        video: '5joa071QsW8',
        bgLarge: bgRivet
    },
    {
        img: drNefarious,
        name: 'Dr Nefarious',
        bg: cardDrNefarious,
        nickName: 'THE MIGHT OF DEMACIA',
        role: 'FIGHTER',
        difficulty: 'MODERATE',
        description: `A true robotic menace, Dr. Nefarious has been bent on taking over the galaxy for as long as his memory banks can remember. Despite an endless string of defeats, this evil genius never quits.
        Now, armed with a device capable of crossing over dimensions, Dr. Nefarious has found a way to ensure he rules the universe . . . no actual conquering necessary!`,
        video: '-m_AB0xba10',
        bgLarge: bgDrNefarious
    },
    
]