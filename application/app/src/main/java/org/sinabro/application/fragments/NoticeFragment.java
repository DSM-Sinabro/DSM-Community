package org.sinabro.application.fragments;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;

import org.sinabro.application.R;
import org.sinabro.application.view.Utils;


public class NoticeFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private int mToolbarHeight;
    private RelativeLayout mToolbarContainer;
    private TextView toolbarTexTView;



    public NoticeFragment() {
        // Required empty public constructor
    }


    // TODO: Rename and change types and number of parameters
    public static NoticeFragment newInstance() {
        NoticeFragment fragment = new NoticeFragment();
        Bundle args = new Bundle();
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View rootView =  inflater.inflate(R.layout.fragment_notice, container, false);
        initToolbar(rootView);
        return rootView;
    }

    private void initToolbar(View view) {
        toolbarTexTView = (TextView) view.findViewById(R.id.tv_toolbar_title);
        toolbarTexTView.setText("공지사항");
        mToolbarHeight = Utils.getToolbarHeight(getContext());
    }



}
