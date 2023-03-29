import { Types } from "mongoose";
import Order from "../models/Order.js";
import User from "../models/User.js";
export default class Contract {
  createContract = async (req, res, next) => {
    try {
      if (!this.contractStatus) {
        return res.status(400).json({
          msg: "Contracts are not allowed",
        });
      }
      const { userId, colorSelected, contractMoney } = req.body;

      if (!userId || !contractMoney || !colorSelected) {
        return res.status(400).json({
          msg: "Invalid data",
        });
      }

      if (!Types.ObjectId.isValid(userId)) {
        return res.status(400).json({
          msg: "Invalid userid",
        });
      }

      if (
        colorSelected !== "green" &&
        colorSelected !== "red" &&
        colorSelected !== "violet"
      ) {
        return res.status(400).json({
          msg: "Please provide a valid color",
        });
      }

      const contractData = {
        period_id: this.period_id,
        userId,
        contractMoney,
        colorSelected,
      };

      const user = await User.findById(userId);
      if (!user) {
        return res.status(400).json({
          msg: "User does not exist",
        });
      }
      if (user.availableBalance < contractMoney) {
        return res.status(400).json({
          msg: "Not enough balance",
        });
      }
      const contract = await Order.create(contractData);
      const updateBalance = await User.findByIdAndUpdate(user, {
        availableBalance: user.availableBalance - contractMoney,
      });

      res
        .status(200)
        .json({ message: "Order added successfully", updateBalance });
    } catch (error) {
      next(error);
    }
  };
  processContract = async () => {
    // First get all the contracts related to the period id in the game class.
    // Then count numbers of contract placed on green, red, violet.
    // Then compare all the contract placed on respective colors.
    // Last show that color in the result which is least selected.
    try {
      const countContracts = async (color) => {
        const contracts = await Order.find({
          period_id: this.period_id,
          colorSelected: color,
        }).count();
        return contracts;
      };
      const contractsWithGreen = await countContracts("green");
      const contractsWithRed = await countContracts("red");
      const contractsWithViolet = await countContracts("violet");
      const result = Math.min(
        contractsWithGreen,
        contractsWithRed,
        contractsWithViolet
      );
      console.log({
        contractsWithGreen,
        contractsWithRed,
        contractsWithViolet,
      });
      let winner;
      console.log(result);
      if (contractsWithGreen == result) {
        winner = "green";
        console.log("Green is the winner");
      } else if (contractsWithRed == result) {
        winner = "red";
        console.log("Red is the winner");
      } else {
        winner = "violet";
        console.log("Violet is the winner");
      }
    } catch (error) {
      console.log(error);
    }
  };
}
