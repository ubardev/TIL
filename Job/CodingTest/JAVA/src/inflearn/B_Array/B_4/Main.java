package inflearn.B_Array.B_4;

import java.util.Scanner;

class Main {
    public void solution(int n) {
        int first = 1, second = 1, third;

        System.out.print(first + " " + second + " ");

        for (int i = 2; i < n; i++) {
            third = first + second;
            System.out.print(third + " ");
            first = second;
            second = third;
        }

    }

    public static void main(String[] args) {
        Main T = new Main();
        Scanner kb = new Scanner(System.in);
        int n = kb.nextInt();
        T.solution(n);
    }
}