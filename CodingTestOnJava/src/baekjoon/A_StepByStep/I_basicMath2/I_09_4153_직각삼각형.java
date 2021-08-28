package baekjoon.A_StepByStep.I_basicMath2;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class I_09_4153_직각삼각형 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String inputData;
        StringTokenizer stringTokenizer;
        int firstNumber;
        int secondNumber;
        int thirdNumber;
        int maxNumber;
        boolean result;

        while (true) {
            inputData = br.readLine();
            if (inputData.equals("0 0 0")) break;
            stringTokenizer = new StringTokenizer(inputData, " ");
            firstNumber = Integer.parseInt(stringTokenizer.nextToken());
            secondNumber = Integer.parseInt(stringTokenizer.nextToken());
            thirdNumber = Integer.parseInt(stringTokenizer.nextToken());
            maxNumber = Math.max(firstNumber, Math.max(secondNumber, thirdNumber));

            if (firstNumber == maxNumber) {
                result = firstNumber * firstNumber == secondNumber * secondNumber + thirdNumber * thirdNumber;
            } else if (secondNumber == maxNumber) {
                result = secondNumber * secondNumber == firstNumber * firstNumber + thirdNumber * thirdNumber;
            } else {
                result = thirdNumber * thirdNumber == firstNumber * firstNumber + secondNumber * secondNumber;
            }

            System.out.println(result ? "right" : "wrong");
        }
    }
}
