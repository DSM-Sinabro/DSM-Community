package org.sinabro.application.fragments;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import org.sinabro.application.R;


public class DeveloperIntro extends Fragment {

    public DeveloperIntro() {
        // Required empty public constructor
    }


    public static DeveloperIntro newInstance() {
        DeveloperIntro fragment = new DeveloperIntro();
        Bundle args = new Bundle();

        fragment.setArguments(args);
        return fragment;
    }



    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_developer_intro, container, false);
    }

}
