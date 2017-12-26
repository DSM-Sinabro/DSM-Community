package org.sinabro.daemmunity.adapter;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;

import org.sinabro.daemmunity.R;
import org.sinabro.daemmunity.fragments.FreeBoardFragment;
import org.sinabro.daemmunity.fragments.MyPageFragment;
import org.sinabro.daemmunity.fragments.NoticeFragment;
import org.sinabro.daemmunity.fragments.RecruitingFragment;

/**
 * Created by BeINone on 2017-05-16.
 */

public class MainPagerAdapter extends FragmentStatePagerAdapter {

    private static final int COUNT = 4;
    private static final int POS_MEAL = 0;
    private static final int POS_APPLY = 1;
    private static final int POS_DORMITORY = 2;
    private static final int POS_MYPAGE = 3;

    public static final int[] mIconResIds = {R.drawable.notice, R.drawable.member, R.drawable.freeboard, R.drawable.mypage};
    public static final String[] mText={"공지사항","인원모집","자유게시판","마이페이지"};

    public MainPagerAdapter(FragmentManager fm) {
        super(fm);
    }

    @Override
    public Fragment getItem(int position) {
        switch (position) {
            case POS_MEAL:
                return NoticeFragment.newInstance();
            case POS_APPLY:
                return RecruitingFragment.newInstance();
            case POS_DORMITORY:
                return FreeBoardFragment.newInstance();
            case POS_MYPAGE:
                return MyPageFragment.newInstance();
            default:
                return RecruitingFragment.newInstance();
        }
    }

    @Override
    public int getCount() {
        return COUNT;
    }
}
