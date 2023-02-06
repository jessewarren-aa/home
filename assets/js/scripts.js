window.addEventListener("DOMContentLoaded", () => {
      console.log("Content loaded!");
      
      let level = 1;
      while (level <= 20) {
        MODULE.placeCoinSection(level);
        MODULE.placeGemSection(level);
        level += 1;
      }
      
    })