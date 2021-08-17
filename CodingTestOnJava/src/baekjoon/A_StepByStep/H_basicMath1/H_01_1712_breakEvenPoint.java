package baekjoon.H_basicMath1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class H_01_1712_breakEvenPoint {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer stringTokenizer = new StringTokenizer(br.readLine());

        int fixedCost = Integer.parseInt(stringTokenizer.nextToken());
        int variableCost = Integer.parseInt(stringTokenizer.nextToken());
        int price = Integer.parseInt(stringTokenizer.nextToken());

        if (variableCost >= price) {
            System.out.println(-1);
        } else {
            System.out.println((fixedCost / (price - variableCost)) + 1);
        }
    }
}
