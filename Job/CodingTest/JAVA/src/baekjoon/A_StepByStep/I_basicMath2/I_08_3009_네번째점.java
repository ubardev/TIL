package baekjoon.A_StepByStep.I_basicMath2;

import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class I_08_3009_네번째점 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] firstNumbers = br.readLine().split(" ");
        String[] secondNumbers = br.readLine().split(" ");
        String[] thirdNumbers = br.readLine().split(" ");

        String x;
        String y;

        if (firstNumbers[0].equals(secondNumbers[0])) {
            x = thirdNumbers[0];
        } else if (firstNumbers[0].equals(thirdNumbers[0])) {
            x = secondNumbers[0];
        } else {
            x = firstNumbers[0];
        }

        if (firstNumbers[1].equals(secondNumbers[1])) {
            y = thirdNumbers[1];
        } else if (firstNumbers[1].equals(thirdNumbers[1])) {
            y = secondNumbers[1];
        } else {
            y = firstNumbers[1];
        }

        System.out.println(x + " " + y);
    }
}
