package org.sinabro.application.adapter;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;

import org.sinabro.application.fragments.CommunityIntro;
import org.sinabro.application.fragments.DeveloperIntro;
import org.sinabro.application.fragments.PlayIntro;

/**
 * Created by 윤정현 on 2017-10-23.
 */

public class IntroPagerAdapter extends FragmentStatePagerAdapter {

    private static final int PAGER_COUNT=3;
    private static final int POS_COMMUNITY_INTRO=0;
    private static final int POS_DEVELOPER_INTRO=1;
    private static final int POS_HOW_TO_PLAY=2;

    public IntroPagerAdapter(FragmentManager fm) {
        super(fm);
    }


    @Override
    public Fragment getItem(int position) {
        switch (position){
            case POS_COMMUNITY_INTRO:
                return CommunityIntro.newInstance();
            case POS_DEVELOPER_INTRO:
                return DeveloperIntro.newInstance();
            case POS_HOW_TO_PLAY:
                return PlayIntro.newInstance();
            default:
                return CommunityIntro.newInstance();
        }
    }

    @Override
    public int getCount() {
        return PAGER_COUNT;
    }
}
