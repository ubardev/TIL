package inflearn.B_Array.B_2;

import java.util.Scanner;

public class Main {
    public int solution(int n, int[] arr) {
        int answer = 1, max = arr[0];

        for (int i = 1; i<n; i++) {
            if (arr[i] > max) {
                answer++;
                max = arr[i];
            }
        }

        return answer;
    }

    // 8
    // 130 135 148 140 145 150 150 153
    public static void main(String[] args) {
        Main T = new Main();
        Scanner kb = new Scanner(System.in);
        int n = kb.nextInt();
        int[] arr = new int [n];
        for (int i = 0; i<n; i++) {
            arr[i] = kb.nextInt();
        }
        System.out.println(T.solution(n, arr));
    }
}