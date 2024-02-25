var JobInfoTab = document.getElementById("JobInfoTab");
var JobGalleryTab = document.getElementById("JobGalleryTab");
// 
var JobInfoPage = document.getElementById("JobInfoPage");
var JobGalleryPage = document.getElementById("JobGalleryPage");
function ChangeJobPage(Name)
{
    if(Name=="JobInfo")
    {
        JobInfoTab.classList.add("active");
        JobGalleryTab.classList.remove("active");
        // 
        JobInfoPage.classList.remove("PageHide")
        JobGalleryPage.classList.add("PageHide");
        // 
    }
    else if(Name=="JobGallery")
    {
        JobInfoTab.classList.remove("active");
        JobGalleryTab.classList.add("active");
        // 
        JobInfoPage.classList.add("PageHide")
        JobGalleryPage.classList.remove("PageHide");
    }
}