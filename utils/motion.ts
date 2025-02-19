export function SlideInFromLeft(delay: number){
    return{
        hidden: {x: -100, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            }
        }
    }
}

export function SlideInFromRight(delay: number){
    return{
        hidden: {x: -100, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            }
        }
    }
}

export const SlideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transitio: {
            delay: 0.5,
            duration: 0.5,
        }
    }
}
