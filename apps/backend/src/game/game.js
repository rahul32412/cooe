import Contract from "./contract.js";

class Game extends Contract {
  period_id = 1;
  seconds = 60;
  minutes = 2;
  contractStatus = true;

  // Provide io method
  provideIo(io) {
    this.io = io;
  }

  // Process Contract

  game = async () => {
    console.log("game is running");
    while (true) {
      if (this.io) {
        this.io
          .in("win-game")
          .emit("timer", { sec: this.seconds, min: this.minutes });
      }
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
      if (this.minutes == 0 && this.seconds == 30) {
        this.contractStatus = false;
        this.processContract();
      }
      if (this.seconds == 0) {
        this.minutes--;
        this.seconds = 60;
      }
      if (this.minutes < 0) {
        this.period_id += 1;
        this.minutes = 2;
        this.contractStatus = true;
      }
      this.seconds--;
    }
  };
}

export default Game;
