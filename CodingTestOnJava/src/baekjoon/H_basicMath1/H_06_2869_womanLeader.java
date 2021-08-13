package baekjoon.H_basicMath1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class H_06_2869_womanLeader {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[][] apart = new int[15][15];
        createApart(apart);

        int testCaseCount = Integer.parseInt(br.readLine());
        StringBuffer stringBuffer = new StringBuffer();

        for (int i = 0; i < testCaseCount; i++) {
            int floor = Integer.parseInt(br.readLine());
            int room = Integer.parseInt(br.readLine());

            stringBuffer.append(apart[floor][room]).append("\n");
        }

        System.out.println(stringBuffer);
    }

    private static void createApart(int[][] apart) {
        for (int i = 0; i < 15; i++) {
            apart[i][1] = 1;
            apart[0][i] = i;
        }

        for (int i = 1; i < 15; i++) {
            for (int j = 2; j < 15; j++) {
                apart[i][j] = apart[i][j-1] + apart[i-1][j];
            }
        }
    }
}
