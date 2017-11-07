package org.sinabro.application.adapter;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.support.v7.widget.CardView;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.bumptech.glide.RequestManager;

import org.sinabro.application.R;
import org.sinabro.application.activities.FreeBoardDetailActivity;
import org.sinabro.application.activities.FreeBoardPostingActivity;
import org.sinabro.application.connection.Service;
import org.sinabro.application.model.FreeBoardRecyclerItem;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * Created by parktaeim on 2017. 10. 27..
 */


public class FreeBoardRecyclerViewAdapter extends RecyclerView.Adapter<FreeBoardRecyclerViewAdapter.ViewHolder> {

    private Context context;
    private ArrayList<FreeBoardRecyclerItem> items = new ArrayList<>();
    private RequestManager requestManager;

    public FreeBoardRecyclerViewAdapter(Context context, ArrayList<FreeBoardRecyclerItem> items, RequestManager requestManager) {
        this.context = context;
        this.items = items;
        this.requestManager = requestManager;
    }

    @Override
    public FreeBoardRecyclerViewAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_freeboard, parent, false);
        ViewHolder viewHolder = new ViewHolder(view);

        return viewHolder;
    }


    @Override
    public void onBindViewHolder(FreeBoardRecyclerViewAdapter.ViewHolder holder, int position) {
        requestManager.load(items.get(position).getProfileImg()).into(holder.profileImg);
        holder.titleTextView.setText(items.get(position).getTitle());
        holder.writerTextView.setText(items.get(position).getWriter());
        holder.dateTextView.setText(items.get(position).getDate());
        holder.countViewsTextView.setText(items.get(position).getCountViews());
        holder.contentTextView.setText(items.get(position).getContentText());
        requestManager.load(items.get(position).getContentImage()).into(holder.contentImageView);

//        Log.d("profileImg === ",items.get(position).getProfileImg());
//        Log.d("contentImg === ",items.get(position).getContentImage());


        if (items.get(position).getContentImage() == null) {
            holder.contentImageView.setVisibility(View.GONE);
        } else {
            holder.contentImageView.setVisibility(View.VISIBLE);
        }

        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(context, FreeBoardDetailActivity.class);
                context.startActivity(intent);
            }
        });

        holder.itemView.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                CharSequence info[] = new CharSequence[]{"수정", "삭제"};

                AlertDialog.Builder builder = new AlertDialog.Builder(context);
//                builder.setTitle("제목");

                builder.setItems(info, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        switch (which) {
                            case 0:
                                Intent intent = new Intent(context, FreeBoardPostingActivity.class);
                                context.startActivity(intent);
                                Toast.makeText(context, "수정", Toast.LENGTH_SHORT).show();
                                break;

                            case 1:
                                AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(
                                        context);

                                alertDialogBuilder.setTitle("글 삭제");
                                alertDialogBuilder
                                        .setMessage("정말 글을 삭제하시겠어요?")
                                        .setCancelable(false)
                                        .setPositiveButton("삭제",
                                                new DialogInterface.OnClickListener() {
                                                    public void onClick(DialogInterface dialog, int id) {
                                                        // 글 삭제
                                                        Toast.makeText(context, "삭제", Toast.LENGTH_SHORT).show();
                                                        Service.getRetrofit(context).post_delete("articleId").enqueue(new Callback<Void>() {
                                                            @Override
                                                            public void onResponse(Call<Void> call, Response<Void> response) {
                                                                Log.d("delete res code ===", String.valueOf(response.code()));
                                                                if (response.code() == 200) {

                                                                } else {
                                                                    Log.d("delete error", "ㅠㅠㅠㅠ");
                                                                }
                                                            }

                                                            @Override
                                                            public void onFailure(Call<Void> call, Throwable t) {
                                                                Log.d("delete failure ===", t.toString());
                                                            }
                                                        });
                                                    }
                                                })
                                        .setNegativeButton("취소",
                                                new DialogInterface.OnClickListener() {
                                                    public void onClick(DialogInterface dialog, int id) {
                                                        // 다이얼로그 취소
                                                        dialog.cancel();
                                                    }
                                                });

                                // 다이얼로그 생성
                                AlertDialog alertDialog = alertDialogBuilder.create();

                                // 다이얼로그 보여주기
                                alertDialog.show();
                                break;
                        }
                        dialog.dismiss();
                    }
                });
                builder.show();
                return false;
            }

        });

    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        CardView cardView;
        ImageView profileImg;
        TextView titleTextView;
        TextView writerTextView;
        TextView dateTextView;
        TextView countViewsTextView;
        TextView contentTextView;
        ImageView contentImageView;

        public ViewHolder(View itemView) {
            super(itemView);
            cardView = (CardView) itemView.findViewById(R.id.cardView);
            profileImg = (ImageView) itemView.findViewById(R.id.profile_img);
            titleTextView = (TextView) itemView.findViewById(R.id.titleTextView);
            writerTextView = (TextView) itemView.findViewById(R.id.writerTextView);
            dateTextView = (TextView) itemView.findViewById(R.id.dateTextView);
            countViewsTextView = (TextView) itemView.findViewById(R.id.viewsCountTextView);
            contentTextView = (TextView) itemView.findViewById(R.id.contentTextView);
            contentImageView = (ImageView) itemView.findViewById(R.id.contentImageView);

        }
    }
}
