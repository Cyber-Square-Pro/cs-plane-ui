import { ICreateProjectForm } from "@/types/project";
import { useMobxStore } from "@/store/store.provider";
import ProjectCreateForm from "@/components/forms/account/project-create-form";


export const CreateProjectModal = () => {

  
  const {
    project:{createProject}
  } = useMobxStore();
  
  const onSubmit = async(formData: ICreateProjectForm)=>{
    // return  createProject().

  }

  return (
    <dialog className="border-3 left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto flex justify-center items-center open">
      <div className="bg-white m-auto p-8 w-[50%] h-[50%]">
        <div className="flex flex-col  h-full w-full">
          <div
            className="flex flex-col bg-cover bg-u bg-center w-full border-2 h-24"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/originals/13/d0/90/13d0903cbcd0e0205c5fe0a3546f59fd.jpg')",
            }}
          ></div>

          <ProjectCreateForm   />
        </div>
      </div>
    </dialog>
  );
};
