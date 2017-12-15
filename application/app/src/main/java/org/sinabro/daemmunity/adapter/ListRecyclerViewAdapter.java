package org.sinabro.daemmunity.adapter;

import android.content.Context;
import android.content.Intent;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.bumptech.glide.Glide;

import org.sinabro.daemmunity.R;
import org.sinabro.daemmunity.AddRecruitDialog;
import org.sinabro.daemmunity.ProjectViewHolder;
import org.sinabro.daemmunity.R;
import org.sinabro.daemmunity.RecyclerViewOnClickListener;
import org.sinabro.daemmunity.activities.DetailActivity;
import org.sinabro.daemmunity.model.ProjectItem;

import java.util.ArrayList;

/**
 * Created by user on 2017-10-24.
 */

public class ListRecyclerViewAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    ArrayList<ProjectItem> items;
    Context context;
    private RecyclerViewOnClickListener mListener;
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
    public int getItemViewType(int position) {
        return super.getItemViewType(position);
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
                    Intent intent = new Intent(context, AddRecruitDialog.class);
                    intent.putExtra("statusNum", statusNum);
                    context.startActivity(intent);
                }
            });

            //todo : 중복코드 합칠 수 있도록 setOnClickListener implement

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

//            holder.addListBtn.setOnClickListener(new View.OnClickListener() {
//                @Override
//                public void onClick(View v) {
//                    Intent intent = new Intent(context, RecruitActivity.class);
//                    intent.putExtra("statusNum", statusNum);
//                    context.startActivity(intent);
//                }
//            });
        }
    }

    @Override
    public int getItemCount() {
        return items.size();
    }
}
