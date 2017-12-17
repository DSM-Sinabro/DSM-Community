package org.sinabro.daemmunity.fragments;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomSheetBehavior;
import android.support.design.widget.BottomSheetDialog;
import android.support.design.widget.CoordinatorLayout;
import android.support.design.widget.FloatingActionButton;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import org.sinabro.daemmunity.R;
import org.sinabro.daemmunity.activities.LoginActivity;


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
        final View rootView = inflater.inflate(R.layout.fragment_my_page,container,false);
        nextLogin(rootView);
        showBottomSheet(rootView);



        return rootView;
    }

    public void nextLogin(View rootView){
        View loginView=rootView.findViewById(R.id.loginLayout);

        loginView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(getActivity(), LoginActivity.class);
                startActivity(intent);
            }
        });


    }

    public void showBottomSheet(View rootView){
        final BottomSheetDialog dialog= new BottomSheetDialog(getActivity());

        View bottomSheetLayout=(LinearLayout)rootView.findViewById(R.id.rl_bottom_sheet);

        BottomSheetBehavior bottomSheetBehavior=BottomSheetBehavior.from(bottomSheetLayout);
        bottomSheetBehavior.setBottomSheetCallback(new BottomSheetBehavior.BottomSheetCallback() {
            @Override
            public void onStateChanged(@NonNull View bottomSheet, int newState) {

            }

            @Override
            public void onSlide(@NonNull View bottomSheet, float slideOffset) {

            }
        });
       /* FloatingActionButton button=rootView.findViewById(R.id.floatingActionButton);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                dialog.setContentView(sheet);
                dialog.show();
            }
        });*/
    }
}
