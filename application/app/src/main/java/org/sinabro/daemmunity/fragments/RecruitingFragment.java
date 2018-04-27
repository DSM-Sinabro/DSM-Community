package org.sinabro.daemmunity.fragments;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentStatePagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageButton;

import org.sinabro.daemmunity.R;

public class RecruitingFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";



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
        View view=inflater.inflate(R.layout.fragment_recruiting, container, false);

        ImageButton btn_project = (ImageButton) view.findViewById(R.id.btn_project);

        btn_project.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getActivity(),ProjectActivity.class);
                startActivity(intent);
            }
        });

        ImageButton btn_study = (ImageButton) view.findViewById(R.id.btn_study);

        btn_study.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getActivity(),StudyActivity.class);
                startActivity(intent);
            }
        });

        ImageButton btn_circles = (ImageButton) view.findViewById(R.id.btn_circles);

        btn_circles.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getActivity(),CirclesActivity.class);
                startActivity(intent);
            }
        });

        ImageButton btn_competition = (ImageButton) view.findViewById(R.id.btn_competition);

        btn_competition.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getActivity(), CompetitionActivity.class);
                startActivity(intent);
            }
        });


        return  view;
    }



}
