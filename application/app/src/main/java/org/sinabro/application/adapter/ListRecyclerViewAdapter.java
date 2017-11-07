package org.sinabro.application.adapter;

import android.content.Context;
import android.content.Intent;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.bumptech.glide.Glide;

import org.sinabro.application.R;
import org.sinabro.application.RecyclerViewOnClickListener;
import org.sinabro.application.activities.DetailActivity;
import org.sinabro.application.dialogs.AddContestDialog;
import org.sinabro.application.dialogs.AddProjectDialog;
import org.sinabro.application.holders.ProjectViewHolder;
import org.sinabro.application.model.ProjectItem;

import java.util.ArrayList;

/**
 * Created by user on 2017-10-24.
 */

public class ListRecyclerViewAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    ArrayList<ProjectItem> items;
    Context context;
    private RecyclerViewOnClickListener mListener;
    final static private int CONTEST_NUMBER = 1;
    final static private int PROJECT_NUMBER = 2;
    final static private int CLUB_NUMBER = 3;
    final static private  int STUDY_NUMBER = 4;
    int statusNum;

    public ListRecyclerViewAdapter(ArrayList<ProjectItem> items, Context context, RecyclerViewOnClickListener mListener, int statusNum) {
        this.statusNum = statusNum;
        this.items = items;
        this.context = context;
        this.mListener = mListener;
    }

    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_project, parent, false);
        return new ProjectViewHolder(v, mListener);
    }

    @Override
    public void onBindViewHolder(final RecyclerView.ViewHolder viewHolder, final int position) {

        if (viewHolder instanceof ProjectViewHolder) {

            final ProjectViewHolder holder = (ProjectViewHolder) viewHolder;

            holder.title.setText(items.get(position).getTitle());
            holder.date.setText(items.get(position).getDate());
            holder.views.setText(items.get(position).getViews());
            holder.userName.setText(items.get(position).getUserName());
            holder.content.setText(items.get(position).getContent());
            Glide.with(context).load(items.get(position).getProfilPic()).into(holder.profilePic);
            holder.view.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Intent intent = new Intent(context, DetailActivity.class);
                    intent.putExtra("statusNum", statusNum);
                    context.startActivity(intent);
                }
            });

            int lines = holder.content.getLineCount();
            if (lines > 30) {
                holder.viewMoreBtn.setVisibility(View.INVISIBLE);
            }

            holder.editBtn.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Intent intent = new Intent(context, AddContestDialog.class);
                    intent.putExtra("recyclerViewPosition", position);
                    context.startActivity(intent);
                }
            });

            holder.viewMoreBtn.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    if (holder.content.isExpanded()) {
                        holder.content.toggle();
                        holder.viewMoreBtn.setText("view more");
                    } else {
                        holder.content.toggle();
                        holder.viewMoreBtn.setText("close");
                    }
                }
            });

            holder.delBtn.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    items.remove(position);
                    notifyDataSetChanged();
                }
            });
        }
    }

    @Override
    public int getItemCount() {
        return items.size();
    }
}
