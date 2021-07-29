package baekjoon.E_array;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class E_04_3052_mod {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        boolean[] arr = new boolean[42];

        for (int i = 0; i < 10; i++) {
            arr[Integer.parseInt(br.readLine()) % 42] = true;
        }

        int count = 0;
        for (boolean value : arr) {
            if (value) count++;
        }

        System.out.println(count);
    }
}
