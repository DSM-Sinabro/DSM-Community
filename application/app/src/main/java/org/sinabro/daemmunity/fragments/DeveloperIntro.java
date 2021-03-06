package org.sinabro.daemmunity.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import org.sinabro.daemmunity.R;
import org.sinabro.daemmunity.activities.IntroActivity;


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
        View view= inflater.inflate(R.layout.fragment_developer_intro, container, false);
        Button nextButton=view.findViewById(R.id.next_button);

        ((IntroActivity)getActivity()).nextButton(nextButton);
        return  view;
    }

}
