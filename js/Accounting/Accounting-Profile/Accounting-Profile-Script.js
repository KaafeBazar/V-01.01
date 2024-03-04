var JobInfoTab = document.getElementById("JobInfoTab");
var JobGalleryTab = document.getElementById("JobGalleryTab");
// 
var JobInfoPage = document.getElementById("JobInfoPage");
var JobGalleryPage = document.getElementById("JobGalleryPage");
// 
var JobProfileTab = document.getElementById("JobProfileTab");
var UserInfoTab = document.getElementById("UserInfoTab");
var NotificationTab = document.getElementById("NotificationTab");
var AcademyTab = document.getElementById("AcademyTab");
var PermiumTab = document.getElementById("PermiumTab");
var SettingTab = document.getElementById("SettingTab");
var LogOutTab = document.getElementById("LogOutTab");
// 
var JobProfilePage = document.getElementById("JobProfilePage");
var UserInfoPage = document.getElementById("UserInfoPage");
var NotificationPage = document.getElementById("NotificationPage");
var AcademyPage = document.getElementById("AcademyPage");
var PermiumPage = document.getElementById("PermiumPage");
var SettingPage = document.getElementById("SettingPage");
var LogOutPage = document.getElementById("LogOutPage");
// 


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
function ChangeAccountContent (Content)
{

  switch (Content)
  {
    case "JobProfile" :
        {
            JobProfileTab.classList.add("active");
            UserInfoTab.classList.remove("active");
            NotificationTab.classList.remove("active");
            AcademyTab.classList.remove("active");
            PermiumTab.classList.remove("active");
            SettingTab.classList.remove("active");
            LogOutTab.classList.remove("active");
            // 
            JobProfilePage.classList.remove("PageHide");
            UserInfoPage.classList.add("PageHide");
            NotificationPage.classList.add("PageHide");            
            AcademyPage.classList.add("PageHide");
            PermiumPage.classList.add("PageHide");
            SettingPage.classList.add("PageHide");
            LogOutPage.classList.add("PageHide");
            break;
        }
    case "UserInfo" :
        {
            JobProfileTab.classList.remove("active");
            UserInfoTab.classList.add("active");
            NotificationTab.classList.remove("active");
            AcademyTab.classList.remove("active");
            PermiumTab.classList.remove("active");
            SettingTab.classList.remove("active");
            LogOutTab.classList.remove("active");
            // 
            JobProfilePage.classList.add("PageHide");
            UserInfoPage.classList.remove("PageHide");
            NotificationPage.classList.add("PageHide");            
            AcademyPage.classList.add("PageHide");
            PermiumPage.classList.add("PageHide");
            SettingPage.classList.add("PageHide");
            LogOutPage.classList.add("PageHide");
            break;
        }
    case "Notification" :
        {
            JobProfileTab.classList.remove("active");
            UserInfoTab.classList.remove("active");
            NotificationTab.classList.add("active");
            AcademyTab.classList.remove("active");
            PermiumTab.classList.remove("active");
            SettingTab.classList.remove("active");
            LogOutTab.classList.remove("active");
            // 
            JobProfilePage.classList.add("PageHide");
            UserInfoPage.classList.add("PageHide");
            NotificationPage.classList.remove("PageHide");            
            AcademyPage.classList.add("PageHide");
            PermiumPage.classList.add("PageHide");
            SettingPage.classList.add("PageHide");
            LogOutPage.classList.add("PageHide");
            break;
        }
    case "Academy" :
        {
            JobProfileTab.classList.remove("active");
            UserInfoTab.classList.remove("active");
            NotificationTab.classList.remove("active");
            AcademyTab.classList.add("active");
            PermiumTab.classList.remove("active");
            SettingTab.classList.remove("active");
            LogOutTab.classList.remove("active");
            // 
            JobProfilePage.classList.add("PageHide");
            UserInfoPage.classList.add("PageHide");
            NotificationPage.classList.add("PageHide");            
            AcademyPage.classList.remove("PageHide");
            PermiumPage.classList.add("PageHide");
            SettingPage.classList.add("PageHide");
            LogOutPage.classList.add("PageHide");
            break;
        }
    case "Permium" :
        {
            JobProfileTab.classList.remove("active");
            UserInfoTab.classList.remove("active");
            NotificationTab.classList.remove("active");
            AcademyTab.classList.remove("active");
            PermiumTab.classList.add("active");
            SettingTab.classList.remove("active");
            LogOutTab.classList.remove("active");
            // 
            JobProfilePage.classList.add("PageHide");
            UserInfoPage.classList.add("PageHide");
            NotificationPage.classList.add("PageHide");            
            AcademyPage.classList.add("PageHide");
            PermiumPage.classList.remove("PageHide");
            SettingPage.classList.add("PageHide");
            LogOutPage.classList.add("PageHide");
            break;
        }
    case "Setting" :
        {
            JobProfileTab.classList.remove("active");
            UserInfoTab.classList.remove("active");
            NotificationTab.classList.remove("active");
            AcademyTab.classList.remove("active");
            PermiumTab.classList.remove("active");
            SettingTab.classList.add("active");
            LogOutTab.classList.remove("active");
            // 
            JobProfilePage.classList.add("PageHide");
            UserInfoPage.classList.add("PageHide");
            NotificationPage.classList.add("PageHide");            
            AcademyPage.classList.add("PageHide");
            PermiumPage.classList.add("PageHide");
            SettingPage.classList.remove("PageHide");
            LogOutPage.classList.add("PageHide");
            break;
        }
    case "LogOut" :
        {
            JobProfileTab.classList.remove("active");
            UserInfoTab.classList.remove("active");
            NotificationTab.classList.remove("active");
            AcademyTab.classList.remove("active");
            PermiumTab.classList.remove("active");
            SettingTab.classList.remove("active");
            LogOutTab.classList.add("active");
            // 
            JobProfilePage.classList.add("PageHide");
            UserInfoPage.classList.add("PageHide");
            NotificationPage.classList.add("PageHide");            
            AcademyPage.classList.add("PageHide");
            PermiumPage.classList.add("PageHide");
            SettingPage.classList.add("PageHide");
            LogOutPage.classList.remove("PageHide");
            break;
        }
  }  
}