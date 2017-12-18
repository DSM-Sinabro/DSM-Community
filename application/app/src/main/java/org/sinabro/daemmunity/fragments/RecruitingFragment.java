package org.sinabro.daemmunity.fragments;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import org.sinabro.daemmunity.R;
import org.sinabro.daemmunity.activities.Main2Activity;
import org.sinabro.daemmunity.activities.RecruitActivity;

public class RecruitingFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    Button projectBtn, contestBtn, studyBtn, clubBtn;

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

        View view = inflater.inflate(R.layout.fragment_recruiting, container, false);

        projectBtn = (Button) view.findViewById(R.id.projectBtn);
        contestBtn =(Button) view.findViewById(R.id.contestBtn);
        studyBtn = (Button) view.findViewById(R.id.studyBtn);
        clubBtn = (Button) view.findViewById(R.id.clubBtn);

        contestBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), RecruitActivity.class);
                intent.putExtra("statusNum", 1);
                startActivity(intent);}
        });

        projectBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), RecruitActivity.class);
                intent.putExtra("statusNum", 2);
                startActivity(intent);}
        });

        clubBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), RecruitActivity.class);
                intent.putExtra("statusNum", 3);
                startActivity(intent);
            }
        });

        studyBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), RecruitActivity.class);
                intent.putExtra("statusNum", 4);
                startActivity(intent);
            }
        });

        return view;
    }



}
