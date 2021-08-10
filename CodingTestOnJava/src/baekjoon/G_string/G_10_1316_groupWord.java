package baekjoon.G_string;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class G_10_1316_groupWord {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    public static void main(String[] args) throws IOException {
        int N = Integer.parseInt(br.readLine());
        int count = 0;

        for (int i = 0; i < N; i++) {
            if (check() == true) {
                count++;
            }
        }
        System.out.println(count);
    }

    private static boolean check() throws IOException {
        boolean[] check = new boolean[26];
        int prev = -'a';
        String str = br.readLine();

        for(int i = 0; i < str.length(); i++) {
            int now = str.charAt(i) - 'a';

            if (prev != now){
                if (check[now] == false) {
                    check[now] = true;
                    prev = now;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}
