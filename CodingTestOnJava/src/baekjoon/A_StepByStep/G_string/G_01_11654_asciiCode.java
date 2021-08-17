package baekjoon.G_string;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class G_01_11654_asciiCode {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int code = br.readLine().charAt(0);
        System.out.println(code);
    }
}
