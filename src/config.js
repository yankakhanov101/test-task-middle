const imgWidth = 800;
const imgHeight = 750;

export default {
    zoom: 1,
    position: [0, 0],
    gfBloor: 0.3,
    floorsImages: {
        standart: {
            cold: {
                gf: {
                    src: "images/standart/cold/gf_standart_cold.png",
                    width: imgWidth,
                    height: imgHeight,
                    position: [0, 0],
                    opacity: 1,
                },
                ff: {
                    src: "images/standart/cold/ff_standart_cold.png",
                    width: imgWidth,
                    height: imgHeight,
                    position: [0, 0],
                    opacity: 1,
                },
            },
            warm: {
                gf: {
                    src: "images/standart/warm/gf_standart_warm.png",
                    width: imgWidth,
                    height: imgHeight,
                    position: [0, 0],
                    opacity: 1,
                },
                ff: {
                    src: "images/standart/warm/ff_standart_warm.png",
                    width: imgWidth,
                    height: imgHeight,
                    position: [0, 0],
                    opacity: 1,
                },
            },
        },
        premium: {
            cold: {
                gf: {
                    src: "images/premium/cold/gf_premium_cold.png",
                    width: imgWidth,
                    height: imgHeight,
                    position: [0, 0],
                    opacity: 1,
                },
                ff: {
                    src: "images/premium/cold/ff_premium_cold.png",
                    width: imgWidth,
                    height: imgHeight,
                    position: [0, 0],
                    opacity: 1,
                },
            },
            warm: {
                gf: {
                    src: "images/premium/warm/gf_premium_warm.png",
                    width: imgWidth,
                    height: imgHeight,
                    position: [0, 0],
                    opacity: 1,
                },
                ff: {
                    src: "images/premium/warm/ff_premium_warm.png",
                    width: imgWidth,
                    height: imgHeight,
                    position: [0, 0],
                    opacity: 1,
                },
            },
        },
    },
    plotsImages: {
        default: {
            src: "images/plots/bg_no_pod.png",
            width: imgWidth,
            height: imgHeight,
            // position: [0, 0],
            opacity: 1
        },
        withPod: {
            src: "images/plots/bg_pod.png",
            width: imgWidth,
            height: imgHeight,
            position: [0, 0],
            opacity: 1
        },
    },
};