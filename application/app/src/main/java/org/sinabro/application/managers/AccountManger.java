package org.sinabro.application.managers;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by 윤정현 on 2017-11-06.
 */

public class AccountManger {

    private static final String PREFS_NAME_ACCOUNT = "accountPrefs"; //파일이름
    private static final String PREFS_KEY_LOGINED = "logined"; //키값

    public static void setLogined(Context context, boolean logined) {
        SharedPreferences prefs = context.getSharedPreferences(PREFS_NAME_ACCOUNT, Context.MODE_PRIVATE);
        prefs.edit().putBoolean(PREFS_KEY_LOGINED, logined).apply();
    }

    public static boolean isLogined(Context context) {
        SharedPreferences prefs = context.getSharedPreferences(PREFS_NAME_ACCOUNT, Context.MODE_PRIVATE);
        return prefs.getBoolean(PREFS_KEY_LOGINED, false);
    }
}
