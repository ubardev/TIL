package baekjoon.B_if;

import java.util.Scanner;

public class B_01_1330_compare {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int firstNumber = sc.nextInt();
        int secondNumber = sc.nextInt();

        System.out.println(compare(firstNumber, secondNumber));
    }

    private static String compare(int firstNumber, int secondNumber) {
        String result = "";

        if (firstNumber > secondNumber)
            result = ">";
        else if (firstNumber < secondNumber)
            result = "<";
        else
            result = "==";

        return result;
    }
}
