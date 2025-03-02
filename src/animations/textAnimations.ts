const textFromBlurVariants = {
    hidden: {
        opacity: 0,
        filter: "blur(8px)"
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
};

const textFromBottomVariants = {
    hidden: {
        y: 100,
        opacity: 0,
        filter: "blur(8px)"
    },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
};

export { textFromBlurVariants, textFromBottomVariants };
