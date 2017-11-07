package org.sinabro.application.model;

/**
 * Created by parktaeim on 2017. 10. 27..
 */

public class FreeBoardRecyclerItem {
    private String profileImg;
    private String title;
    private String writer;
    private String date;
    private String countViews;
    private String contentText;
    private String contentImage;

    public FreeBoardRecyclerItem(String profileImg, String title, String writer, String date, String countViews, String contentText, String contentImage) {
        this.profileImg = profileImg;
        this.title = title;
        this.writer = writer;
        this.date = date;
        this.countViews = countViews;
        this.contentText = contentText;
        this.contentImage = contentImage;
    }

    public String getProfileImg() {
        return profileImg;
    }

    public void setProfileImg(String profileImg) {
        this.profileImg = profileImg;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getCountViews() {
        return countViews;
    }

    public void setCountViews(String  countViews) {
        this.countViews = countViews;
    }

    public String getContentText() {
        return contentText;
    }

    public void setContentText(String contentText) {
        this.contentText = contentText;
    }

    public String getContentImage() {
        return contentImage;
    }

    public void setContentImage(String contentImage) {
        this.contentImage = contentImage;
    }
}
