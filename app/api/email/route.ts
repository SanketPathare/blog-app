import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse , NextRequest} from "next/server";


export async function POST(request:NextRequest) {
  const LoadDB = async () => {
    await ConnectDB();
  };
  LoadDB();


  // email created successfull request
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };
  await EmailModel.create(emailData);
  return  NextResponse.json({success: true, msg:"email created successfully"});
 }

 // get the email from the database 
 export async function GET() {
  const emails = await EmailModel.find({});
  return NextResponse.json({emails});
}

// delete the email from the database
export async function DELETE(request:NextRequest){
  const id =  await request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({success:true,msg:"Email Deleted"})
}