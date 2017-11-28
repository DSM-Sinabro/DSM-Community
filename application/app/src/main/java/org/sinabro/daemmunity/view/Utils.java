package org.sinabro.daemmunity.view;

import android.content.Context;
import android.content.res.TypedArray;

import org.sinabro.daemmunity.R;

/**
 * Created by 윤정현 on 2017-11-07.
 */

public class Utils {

    public static int getToolbarHeight(Context context) {
        final TypedArray styledAttributes = context.getTheme().obtainStyledAttributes(
                new int[]{R.attr.actionBarSize});
        int toolbarHeight = (int) styledAttributes.getDimension(0, 0);
        styledAttributes.recycle();

        return toolbarHeight;
    }

    public static int getTabsHeight(Context context) {
        return (int) context.getResources().getDimension(R.dimen.tabsHeight);
    }
}