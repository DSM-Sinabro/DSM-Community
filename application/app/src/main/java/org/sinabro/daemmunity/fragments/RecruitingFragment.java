package org.sinabro.daemmunity.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import org.sinabro.daemmunity.R;

public class RecruitingFragment extends Fragment {
    public RecruitingFragment() {
        // Required empty public constructor
    }

    public static RecruitingFragment newInstance() {
        RecruitingFragment fragment = new RecruitingFragment();
        Bundle args = new Bundle();

        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_recruiting, container, false);
    }
}
