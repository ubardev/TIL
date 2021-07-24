package baekjoon.C_for;

import java.util.Scanner;

public class C_03_8393_sum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int lastNumber = sc.nextInt();
        int sum = 0;

        for (int i=1; i<= lastNumber; i++) {
            sum += i;
        }

        System.out.println(sum);
    }
}
