package org.sinabro.daemmunity.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import org.sinabro.daemmunity.R;


public class MyPageFragment extends Fragment {



    public MyPageFragment() {
        // Required empty public constructor
    }


    // TODO: Rename and change types and number of parameters
    public static MyPageFragment newInstance() {
        MyPageFragment fragment = new MyPageFragment();

        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(final LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View v = inflater.inflate(R.layout.fragment_my_page,container,false);

        return v;
    }
}
