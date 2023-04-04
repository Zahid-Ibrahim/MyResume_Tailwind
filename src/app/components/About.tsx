import React from "react";

export default function About() {
  return (
    <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Description of Projects</h3>
            
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              {/* <Image src={design} width={100} height={100} /> */}
              <h3 className="text-lg font-semibold pt-8 pb-2 underline  ">
              Gulf HR and Payroll System  
              </h3>
              <p className="py-2">
              Gulf HR is a secure, flexible, real-time web based and localized HR and Payroll System where all employees are able to participate. It can also interface with popular time attendance system as well as financial packages. Some of the features of Gulf HR and Payroll System are HR Administration, Payroll, Recruitment, Policy Manual, Workflow and Employee Self Service. SQL Server is used as a Database System and .NET Framework 3.5 is used as a Web Server.
              </p>
              <h4 className="py-4 text-teal-600">Tools/Platforms</h4>
              <p className="text-gray-800 py-1 italic">ASP.NET 3.5</p>
              <p className="text-gray-800 py-1 italic">C#</p>
              <p className="text-gray-800 py-1 italic">SQL Server</p>
              <p className="text-gray-800 py-1 italic">WebServices</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              {/* <Image src={code} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2  underline">
              Hospital Management System [i-Care]
              </h3>
              <p className="py-2">
              i-Care is the only patient centric Hospital Management Solution that can make your hospital completely paperless in no time. It is a fully integrated online system that not only provides an opportunity to the hospital to enhance their patient care but also can increase the profitability of the organization. This system provides the benefits of streamlining of operations, enhanced administration and control, improved response, cost control and improved profitability.
              </p>
              <h4 className="py-4 text-teal-600">Tools/Platforms</h4>
              <p className="text-gray-800 py-1 italic">ASP.NET using MVC Architecture</p>
              <p className="text-gray-800 py-1 italic">Microsoft SQL Server</p>
              <p className="text-gray-800 py-1 italic">Javascript</p>
              <p className="text-gray-800 py-1 italic">Jquery/Linq</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              {/* <Image src={consulting} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2 underline"> Algo ERP </h3>
              <p className="py-2">
              AlgoERP is extremely adaptable to the needs of the manufacturers of Apparel and Home Textile products. It consists of 17 modules which includes Merchandising, Product Engineering/ Pre production planning, Production Planning, Fabrication, Materials Management, Production Activity Control, Financials and Order Costing and Budgeting.


              </p>
              <h4 className="py-4 text-teal-600">Tools/Platforms</h4>
              <p className="text-gray-800 py-1 italic">HTML</p>
              <p className="text-gray-800 py-1 italic">ADO.NET</p>
              <p className="text-gray-800 py-1 itaic">Microsoft Visio</p>
              <p className="text-gray-800 py-1 italic">Microsoft Project</p>
            </div>
          </div>
        </section>
  );
}