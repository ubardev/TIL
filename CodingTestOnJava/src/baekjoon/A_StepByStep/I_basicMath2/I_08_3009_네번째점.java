package baekjoon.A_StepByStep.I_basicMath2;

import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class I_08_3009_네번째점 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int[] firstNumbers = new int[2];
        st = new StringTokenizer(br.readLine(), " ");
        firstNumbers[0] = Integer.parseInt(st.nextToken());
        firstNumbers[1] = Integer.parseInt(st.nextToken());

        int[] secondNumbers = new int[2];
        st = new StringTokenizer(br.readLine(), " ");
        secondNumbers[0] = Integer.parseInt(st.nextToken());
        secondNumbers[1] = Integer.parseInt(st.nextToken());

        int[] thirdNumbers = new int[2];
        st = new StringTokenizer(br.readLine(), " ");
        thirdNumbers[0] = Integer.parseInt(st.nextToken());
        thirdNumbers[1] = Integer.parseInt(st.nextToken());

        if (firstNumbers[0] == secondNumbers[0]) {
            System.out.print(thirdNumbers[0]);
        } else if (firstNumbers[0] == thirdNumbers[0]) {
            System.out.print(secondNumbers[0]);
        } else {
            System.out.print(firstNumbers[0]);
        }

        System.out.print(" ");

        if (firstNumbers[1] == secondNumbers[1]) {
            System.out.print(thirdNumbers[1]);
        } else if (firstNumbers[1] == thirdNumbers[1]) {
            System.out.print(secondNumbers[1]);
        } else {
            System.out.print(firstNumbers[1]);
        }
    }
}
