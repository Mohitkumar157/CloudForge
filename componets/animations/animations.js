const animations = {
  "fade-up": {
    from: {
      y: 300,
      opacity: 0,
    },
  },

  "child-fade-up": {
    from: {
      y: 400,
     
    },
  },

  "fade-down": {
    from: {
      y: -200,
      opacity: 0,
    },
  },

  "child-fade-down": {
    from: {
      y: -200,
      opacity: 0,
    },
  },

  "fade-left": {
    from: {
      x: -100,
      opacity: 0,
    },
  },

  "child-fade-left": {
    from: {
      x: -100,
      opacity: 0,
    },
  },

  "fade-right": {
    from: {
      x: 100,
      opacity: 0,
    },
  },

  "child-fade-right": {
    from: {
      x: 100,
      opacity: 0,
    },
  },

  "scale-in": {
    from: {
      scale: 0,
      y: 80,
      opacity: 0,
    },
  },

  "child-scale-in": {
    from: {
      scale: 0,
      y: 80,
      opacity: 0,
    },
  },

  "scale-image": {
    from: {
      scale: 1.7,
      opacity: 0,
    },
    duration: 1.5,
    mobileStart: "top 30%",
    desktopStart: "top 50%",
  },

  "child-scale-image": {
    from: {
      scale: 1.7,
      opacity: 0,
    },
    duration: 1.5,
    mobileStart: "top 30%",
    desktopStart: "top 50%",
  },

  "zoom-out": {
    from: {
      scale: 1.3,
      opacity: 0,
    },
  },

  "child-zoom-out": {
    from: {
      scale: 1.3,
      opacity: 0,
    },
  },
};

export default animations;