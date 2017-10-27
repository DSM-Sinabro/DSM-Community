package org.sinabro.application.model;

/**
 * Created by user on 2017-10-24.
 */

public class BillboardItem {
    private String title;
    private String userName;
    private String date;
    private String views;
    private String profilPic;
    private String position;
    private String content;

    private String member;
    private String dueDate;
    private String file;
    private String id;


    public BillboardItem() {
    }

    public BillboardItem(String content,
                         String title,
                         String userName,
                         String date,
                         String views,
                         String profilPic,
                         String position) {
        this.content = content;
        this.title = title;
        this.userName = userName;
        this.date = date;
        this.views = views;
        this.profilPic = profilPic;
        this.position = position;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getProfilPic() {
        return profilPic;
    }

    public void setProfilPic(String profilPic) {
        this.profilPic = profilPic;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getViews() {
        return views;
    }

    public void setViews(String views) {
        this.views = views;
    }
}
