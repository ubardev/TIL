package baekjoon.C_for;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class C_02_10950_aplusb {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCaseCount = sc.nextInt();
        List<int[]> testCases = new ArrayList<>();

        for (int i = 0; i < testCaseCount; i++) {
            int[] numbers = new int[2];
            numbers[0] = sc.nextInt();
            numbers[1] = sc.nextInt();
            testCases.add(numbers);
        }

        for (int[] testCase : testCases) {
            System.out.println(testCase[0] + testCase[1]);
        }
    }
}
