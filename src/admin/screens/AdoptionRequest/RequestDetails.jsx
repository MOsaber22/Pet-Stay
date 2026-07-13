import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Typography,
  Chip,
  Avatar,
  Button,
} from "@material-tailwind/react";

const RequestDetails = () => {
  const { requestID } = useParams();
  const navigate = useNavigate();
  const [updating, setUpdating] = useState(false);
  const [request, setRequest] = useState(null);
  const updateStatus = async (newStatus) => {
    if (request.status === newStatus) return;

    setUpdating(true);

    try {
      const res = await fetch(
        `https://6a4e61a9e785c9ef536cbf8e.mockapi.io/adoptionRequests/${requestID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...request,
            status: newStatus,
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to update");

      const data = await res.json();
      setRequest(data);
    } catch (err) {
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const res = await fetch(
          `https://6a4e61a9e785c9ef536cbf8e.mockapi.io/adoptionRequests/${requestID}`
        );

        const data = await res.json();
        setRequest(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRequest();
  }, [requestID]);

  if (!request) {
    return (
      <div className="flex justify-center items-center min-h-[70vh] text-white text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10">

      <Button
        variant="text"
        color="teal"
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        ← Back to Requests
      </Button>

      <Card className="bg-[#20363a] border border-teal-700 shadow-2xl">
        <CardBody>

          <div className="flex flex-col md:flex-row gap-8 items-center">

            <Avatar
              src={request.catImg}
              alt={request.cat}
              size="xxl"
              className="border-4 border-teal-500 shadow-lg"
            />

            <div className="flex-1">

              <Typography
                variant="h3"
                className="text-white font-bold mb-2"
              >
                {request.applicant}
              </Typography>

              <Typography
                className="text-gray-300 text-lg mb-5"
              >
                Adoption Request Details
              </Typography>

              <Chip
                value={request.status}
                className={`w-fit px-4 py-2 text-sm ${request.status === "Approved"
                    ? "bg-green-600 text-white"
                    : request.status === "Pending"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-600 text-white"
                  }`}
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-[#294449] rounded-xl p-5">
              <Typography className="text-gray-400 text-sm">
                Applicant
              </Typography>

              <Typography className="text-white text-xl font-semibold">
                {request.applicant}
              </Typography>
            </div>

            <div className="bg-[#294449] rounded-xl p-5">
              <Typography className="text-gray-400 text-sm">
                Cat Name
              </Typography>

              <Typography className="text-white text-xl font-semibold">
                {request.cat}
              </Typography>
            </div>

            <div className="bg-[#294449] rounded-xl p-5">
              <Typography className="text-gray-400 text-sm">
                Applied Date
              </Typography>

              <Typography className="text-white text-xl font-semibold">
                {request.appliedDate}
              </Typography>
            </div>

            <div className="bg-[#294449] rounded-xl p-5">
              <Typography className="text-gray-400 text-sm">
                Request ID
              </Typography>

              <Typography className="text-white text-xl font-semibold">
                #{request.id}
              </Typography>
            </div>

          </div>

          <div className="mt-10 flex gap-4">

            <Button
              color="green"
              disabled={request.status === "Approved" || updating}
              onClick={() => updateStatus("Approved")}
              className={`${request.status === "Approved"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
                }`}
            >
              {updating && request.status !== "Approved"
                ? "Updating..."
                : request.status === "Approved"
                  ? "Approved ✓"
                  : "Approve"}
            </Button>

            <Button
              color="red"
              disabled={request.status === "Rejected" || updating}
              onClick={() => updateStatus("Rejected")}
              className={`${request.status === "Rejected"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
                }`}
            >
              {updating && request.status !== "Rejected"
                ? "Updating..."
                : request.status === "Rejected"
                  ? "Rejected ✓"
                  : "Reject"}
            </Button>

          </div>

        </CardBody>
      </Card>
    </div>
  );
};

export default RequestDetails;
