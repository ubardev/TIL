package baekjoon.D_while;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class D_01_10952_APlusBDash5 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String lineData = br.readLine();
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();

        while (!"0 0".equals(lineData)) {
            st = new StringTokenizer(lineData, " ");
            sb.append(Integer.parseInt(st.nextToken()) + Integer.parseInt(st.nextToken()))
                    .append("\n");
            lineData = br.readLine();
        }

        System.out.println(sb);
    }
}
