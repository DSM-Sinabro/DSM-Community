package org.sinabro.daemmunity.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import org.sinabro.daemmunity.R;
import org.sinabro.daemmunity.activities.IntroActivity;

public class CommunityIntro extends Fragment {


    public CommunityIntro() {
        // Required empty public constructor
    }


    // TODO: Rename and change types and number of parameters
    public static CommunityIntro newInstance() {
        CommunityIntro fragment = new CommunityIntro();
        Bundle args = new Bundle();

        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View rootView= inflater.inflate(R.layout.fragment_community_intro, container, false);
        View mainView=inflater.inflate(R.layout.activity_intro,container,false);
        ViewPager viewPager=mainView.findViewById(R.id.intro_viewpager);
        Button nextButton=rootView.findViewById(R.id.next_button);

        ((IntroActivity)getActivity()).nextButton(nextButton);
        return  rootView;
    }









}
