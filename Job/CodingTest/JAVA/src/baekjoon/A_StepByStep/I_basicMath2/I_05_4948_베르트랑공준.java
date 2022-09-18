package baekjoon.A_StepByStep.I_basicMath2;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class I_05_4948_베르트랑공준 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = -1;
        StringBuffer sb = new StringBuffer();

        while (n != 0) {
            n = Integer.parseInt(br.readLine());
            if (n == 0) break;

            int count = getCount(n);
            sb.append(count).append('\n');
        }

        System.out.println(sb);
    }

    private static int getCount(int n) {
        int count = 0;
        boolean[] primes = new boolean[n *  2 + 1];

        primes[0] = primes[1] = true;

        for (int i = 2; i <= Math.sqrt(primes.length); i++) {
            if (primes[i]) continue;
            for (int j = i * i; j < primes.length; j += i) {
                primes[j] = true;
            }
        }

        for (int i = n + 1; i < primes.length; i++) {
            if (!primes[i]) count++;
        }

        return count;
    }
}
