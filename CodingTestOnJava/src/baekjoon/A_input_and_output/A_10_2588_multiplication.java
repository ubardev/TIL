package baekjoon.A_input_and_output;

import java.util.Scanner;

public class A_10_2588_multiplication {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int firstNumber = sc.nextInt();
        int secondNumber = sc.nextInt();

        int secondNumberModHundred = secondNumber / 100;
        int secondNumberModTen = (secondNumber % 100) / 10;
        int secondNumberModOne = secondNumber % 10;

        System.out.println(firstNumber * secondNumberModOne);
        System.out.println(firstNumber * secondNumberModTen);
        System.out.println(firstNumber * secondNumberModHundred);
        System.out.println(firstNumber * secondNumber);
    }
}
